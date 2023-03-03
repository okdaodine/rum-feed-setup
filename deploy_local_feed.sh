docker pull btclinkgrt/rum-feed
docker-compose down --remove-orphans
docker-compose up -d --force-recreate --no-deps postgres feed