# Purpose:
Here I'm demonstrating how to use Docker with Next.js - and use an external API in a seperate container. I also added PM2,  Redis,  and Nodemon to demonstrate their use in this setup.

# Create a Network:
```sh 
$ docker network create --driver=bridge --subnet=192.168.0.0/16 br0
```
The network ```br0``` is created to accomodate cross-api communication within the containers.

# Launch in Dev Mode with HMR:
```sh
$ docker-compose -f docker-compose-dev.yml build
$ docker-compose -f docker-compose-dev.yml up
```

Navigate your browser to ``http://localhost:8080``. You should see changes to components happen automatically with HMR. Likewise, the Node/Express API is running on Nodemon, so changes should automatically be reflected without restarting the container.

# Launch in Production Mode: 
```sh
$ docker-compose build
$ docker-compose up
```

PM2 in Cluster Mode is being used within the container for persistance of both Next and the Node API. Note: ```next build``` is automatically called to build the files for production.