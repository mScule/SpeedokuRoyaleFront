# Go to the dockerfile directory
cd ..

# Building the app
yarn install
yarn test
yarn build

# Building new image and running container
docker build . -t sp-front
docker run -d --name sp-front-instance --publish 80:80 sp-front
