## Run/Start/Stop Docker Project

        - ` docker-compose up `//from w/in project directory

        ` docker-compose down `//stop and remove containers

        ` docker-compose down --rmi all --volumes `//stop and remove images AND volumes

        ` docker-compose stop `//just stop, but don't remove anything


        ` docker-compose logs `//get all associated activity for containers linked with this docker-compose


## Editing files in Docker shell

        ` docker exec -it <container> sh `//enter container shell

        ` apt-get update `

        ` apt-get install vim `

        ` vim <file_name> `//open file via Vim/Bash

        ` i ` //insert mode

        ` :w! `//write/save

        ` :q! ` //exit/quit Vim
