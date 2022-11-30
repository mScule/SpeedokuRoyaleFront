# Deleting pre-existing docker container
docker stop sp-front-instance
docker container rm --volumes sp-front-instance

# Building new image and running container
docker build . -t sp-front
docker run -d --name sp-front-instance --publish 80:80 sp-front
