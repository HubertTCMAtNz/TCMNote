# docker 

```sh
docker rm $(docker ps -a -q) # delete all of the containers on your Docker hosts,
docker rmi $(docker images -q) # delete all docker images
docker rm $(docker ps -a -q --filter 'exited!=0')
docker rmi $(docker images -q -f "dangling=true") # remove untagged image
```