## Deploy to Digital Ocean Via Docker

https://www.digitalocean.com/community/tutorials/webinar-series-building-containerized-applications

* First:

   - Install Node NVM Manager and NPM for Ubuntu:

    ` sudo apt-get update `

    ` sudo apt-get install build-essential libssl-dev `

    ` curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh -o install_nvm.sh `

        -  inspect the installation script with nano:

          ` nano install_nvm.sh `

        - Run the script with bash:

          ` bash install_nvm.sh `

          ` source ~/.profile `//update bash w/out having to sign out then in again

      - ..find out the versions of Node.js that are available:

          ` nvm ls-remote `

          ` nvm install 8.9.4 `

          ` node -v `

          ` nvm ls `


      - Install NPM:

          ` sudo apt install npm `

      - Install Angular CLI on Ubuntu Droplet:

          ` sudo npm install -g @angular/cli `//not working in bash/droplet

          ` npm install -g @angular/cli `// once SSHd into running node shell/directory....for updates...`ng build`

          https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04



    - change callbackURL in `src/app/auth/auth0-variables.ts`
      + whitelist DigitalOcean URL via `Auth0` UI

    - run node server after SSHing into DigitalOcean server

    - re-run `ng-build` using node -v 8.9

    - re-create `variables.env` file in root of project directory


    - ` sudo apt-get install -y docker-compose `//inside bash server

    - change MongoDb connection string to `process.env.MONGODB_URI` in `routes/api.js` ???


### Prerequisites

    - One Ubuntu 16.04 Droplet set up by following this Ubuntu 16.04 initial server setup tutorial, including a sudo non-root user and a firewall.

    - The latest version of Docker Community Edition installed

        https://www.digitalocean.com/community/tutorials/webinar-series-getting-started-with-containers#step-4-%E2%80%94-building-images


### Steps

    - ` ssh <my-server-name-+-address>`

    - ` cd ~ `

    -  ` git clone https://github.com/firebuggirl/mean-contact-list.git `

    - `  cd mean-contact-list `

    - re-build &/or build Docker image with new values/code:

        ` docker-compose build `

        ` docker-compose up `

        ` sudo docker ps `//get serverIP

        ` http://138.68.230.240:32781/ ` = my server + assigned port


##  Managing and Scaling the Application

      ` sudo docker-compose up --scale web=10 `//10 instances

      ` sudo docker ps `

        - Docker has assigned a random port to expose each web container on the host

        - can also scale-in the web container:

          ` sudo docker-compose up --scale web=2 `

          - can now stop the application, and, just like before, you can also clean up the resources to avoid naming conflicts:


          ` sudo docker-compose stop
            sudo docker-compose rm -f
            sudo docker network remove  meancontactlist_nodeapp-network `
