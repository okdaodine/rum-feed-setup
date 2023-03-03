#!/bin/bash

if [[ ! -v DOMAIN ]]; then
  echo "DOMAIN is not set, example: export DOMAIN=google.com && ./deploy.sh"
  exit 1
fi

sed "s/DOMAIN/$DOMAIN/g" nginx.example.conf > nginx.conf

if [ ! -e "./config.js" ]; then
  cp config.example.js config.js
fi

if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'Error: docker-compose is not installed.' >&2
  exit 1
fi

docker-compose down --remove-orphans

domains=($DOMAIN)
rsa_key_size=4096
data_path="./certbot"
staging=0 # Set to 1 if you're testing your setup to avoid hitting request limits

for domain in ${domains[@]}; do
  echo $domain
  if [ -d "$data_path/conf/live/$domain" ]; then
    docker pull postgres:12.0-alpine
    docker pull btclinkgrt/rum-feed
    docker-compose up -d
    exit
  fi
done

if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
  echo "### Downloading recommended TLS parameters ..."
  mkdir -p "$data_path/conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/conf/options-ssl-nginx.conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/conf/ssl-dhparams.pem"
  echo
fi

for domain in ${domains[@]}; do
  echo "### Creating dummy certificate for $domain ..."
  path="/etc/letsencrypt/live/$domain"
  mkdir -p "$data_path/conf/live/$domain"
  docker-compose run --rm --entrypoint "\
    openssl req -x509 -nodes -newkey rsa:2048 -days 1\
      -keyout '$path/privkey.pem' \
      -out '$path/fullchain.pem' \
      -subj '/CN=localhost'" certbot
  echo
done

echo "### Start services ..."
docker-compose up -d --force-recreate --no-deps nginx feed postgres
echo

waiting_time_for_nginx_starting=30 
echo "### waiting for $waiting_time_for_nginx_starting seconds ..."
sleep $waiting_time_for_nginx_starting
echo

for domain in ${domains[@]}; do
  echo "### Deleting dummy certificate for $domain ..."
  docker-compose run --rm --entrypoint "\
    rm -Rf /etc/letsencrypt/live/$domain && \
    rm -Rf /etc/letsencrypt/archive/$domain && \
    rm -Rf /etc/letsencrypt/renewal/$domain.conf" certbot
  echo
done

# Enable staging mode if needed
if [ $staging != "0" ]; then staging_arg="--staging"; fi

docker-compose stop certbot
for domain in ${domains[@]}; do
  echo "### Requesting Let's Encrypt certificate for $domain ..."
  docker-compose run --rm --entrypoint "\
    certbot certonly --webroot -w /var/www/certbot \
      $staging_arg \
      -d $domain \
      --rsa-key-size $rsa_key_size \
      --agree-tos \
      --force-renewal" certbot --register-unsafely-without-email
  echo
done
echo "### Recreate certbot ..."
docker-compose up -d --force-recreate --no-deps certbot

echo "### Recreate nginx ..."
docker-compose up -d --force-recreate --no-deps nginx