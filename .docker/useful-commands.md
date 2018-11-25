# Useful Docker Commands


## Docker Machine

- `docker-machine start` - Start VM
- `docker-machine stop` - Stop VM
- `docker-machine env` - Display Docker client setup commands

## Docker Client

- `docker <command> --help` - Get help on a specific command
- `docker pull <Name of Image>` - Pull image from Docker Hub
- `docker images` - Show all images
- `docker rmi <ImageID>` - Remove specific images
- `docker rmi $(docker images | grep "^<none>" | awk "{print $3}")` - Remove untagged images - <none>
- `docker ps -a` - Show all containers
- `docker rm <ContainerID>` -Remove specific container
- `docker rm $(docker ps -a -q)` Remove all containers
- `docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Status}}'` - Formatted list of containers
- `docker run -d --name <Container Name> -p <External Port>:<Container Port> <Your Image>` - Run a container
- `docker build -f <Your Dockerfile> -t <Tag Name> .` - Build an image from a Dockerfile
- `docker login` - Login using your Docker credentials
- `docker push <Your Image Name>` - Push an image to Docker hub

## Docker Compose

- `docker-compose build` - Build images based on docker-compose
- `docker-compose up -d` - Start in daemon mode
- `docker-compose logs` - Show logs from containers
- `docker-compose up` - Start containers based on docker-compose
- `docker-compose stop` - Stop containers
- `docker-compose down` - Stop and remove containers





## Return dangling images:

    - ..often occurs when building a new image and tagging it w/ an existing tag

    ` docker image ls --filter dangling=true `


## Delete all dangling images:


    ` docker image prune `

    ` docker images prune -a `//also remove all unused images..ie., those not being used by any containers


## Other filters:

    `dangling`

    `before` -> requires and image name or ID as an argument & returns all images created before it

    `since` -> same as above, but returns images created after the specified image

    `label` -> filter images by label &/or label/value


    ## Delete unused volumes

        ` docker volume prune `