docker logs --tail 100 -f $(docker ps -qf "name=.*_feed")