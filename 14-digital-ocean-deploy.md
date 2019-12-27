## Create a Droplet:

https://www.digitalocean.com/community/tutorials/how-to-create-your-first-digitalocean-droplet

- DigitalOcean calls its cloud servers `Droplets`

- How To Connect To Your Droplet with SSH:

    https://www.digitalocean.com/community/tutorials/how-to-connect-to-your-droplet-with-ssh

    - Step 1 — Getting Information about the Droplet:

    To log in to your Droplet, you'll need to know three pieces of information:



    - The Droplet's `IP address` - get via DigitalOcean control panel

    - The `default username` on the server

    - The `default password` for that username

        - check the email you receive about your server

          - `strongly recommend adding an SSH key` to your account...Once added, you can select your SSH key and use it when creating future Droplets. This eliminates the need for root passwords altogether, and makes your Droplets much less vulnerable to attack.




  * Connect to droplet w/ SSH:

   https://www.digitalocean.com/community/tutorials/how-to-connect-to-your-droplet-with-ssh


    ` ssh root@xxx.xx.xxx.xxx ` -> `yes` -> enter password -> change password

############################################
##  Initial Server Setup with Ubuntu 16.04
############################################

https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04

      * Step One — Root Login


      `  ssh root@xxx.xx.xxx.xxx  `

      - `root` password = `<my-newPsswrd>`

      - The `root user` is the administrative user in a Linux environment that has very broad privileges. Because of the heightened privileges of the root account, you are actually `discouraged from using it` on a regular basis.

      ...because part of the power inherent with the root account is the ability to make very destructive changes, even by accident!!!!!

      * Step Two — Create a New User

        ` adduser myusername ` =  regular account privileges

        - new password for user `myusername` = `<my-newPsswrd>`

        - other options in shell prompt optional


      * Step Three — Root Privileges

        - To avoid having to log out of our normal user and log back in as the root account, we can set up what is known as `superuser` or `root privileges` for our normal account. This will allow our normal user to run commands with administrative privileges by putting the word sudo before each command.

        ` usermod -aG sudo username `//user can run commands with superuser privileges

        ie.,

        ` usermod -aG sudo myusername `


    * Step Four — Add Public Key Authentication (Recommended)

        - increase the security of your server by requiring a `private SSH key` to log in

        - `Generate a Key Pair` at the terminal of your local machine (ie. your computer):


            ` ssh-keygen `

            `  /Users/my-name/.ssh/id_rsa_digital_ocean_mongo_node `//where to save

           - next...will be prompted for a passphrase to secure the key with. You may either enter a passphrase or leave the passphrase blank. ...leave blank for now

           - generates a `private key, id_rsa, and a public key, id_rsa.pub`, in the .ssh directory of the localuser's home directory. Remember that the `private key should not be shared with anyone` who should not have access to your servers!

           * Copy the Public Key:



            ` cat  /Users/my-name/.ssh/id_rsa_digital_ocean_mongo_node.pub `




            - On the server, as the root user switch to user `myusername`:

                ` su - myusername `

                ` mkdir ~/.ssh `

                ` chmod 700 ~/.ssh `//restrict permissions

                ` vim ~/.ssh/authorized_keys `

                ` i ` = insert mode

                - `insert your public key` (which should be in your clipboard) by pasting it into the editor.

                ` !wq `//write/save/quit vim

                -  restrict the permissions of the authorized_keys file:

                    ` chmod 600 ~/.ssh/authorized_keys `

                - Type this command once to return to the root user:

                    ` exit `

                    - Now your public key is installed, and you can use SSH keys to log in as your user.

                    More info: https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server


        * Step Five — Disable Password Authentication (Recommended)


                -  increase your server's security

                - `restrict SSH access` to your server to `public key authentication` only...only way to log in to your server (aside from the console) is to possess the private key that pairs with the public key that was installed.


                - As `root` or your new `sudo user`(ie., myusername), open the SSH daemon configuration:

                   ` sudo nano /etc/ssh/sshd_config `

                   - Find the line that specifies `PasswordAuthentication`, uncomment it by deleting the preceding #, then change its value to "no"

                   - should look like this after you have made the change:

                   ` PasswordAuthentication no `

                   `CTRL-X`, then `Y`, then `ENTER`

                   - reload the SSH daemon:

                   ` sudo systemctl reload sshd `

                   - server is now only accessible with SSH key authentication


          * Step Six — Test Log In


              - Do not disconnect until you confirm that you can successfully log in via SSH!!!!!!!

              - in a new terminal on your local machine, log in to your server using the new account that we created:

              ` ssh <my-user-name+serverIP> `

                ssh: connect to host ..... port 22: Connection refused !!!!!!!!!

                NOTE: Have to add new key via console because I am using a filename other than the default id_rsa:

                ie.,...

                ` eval ssh-agent -s
                ssh-add ~/.ssh/id_rsa_digital_ocean_mongo_node `

                THEN:

                ` ssh <my-user-name+serverIP> `


                - ... if you need to run a command with root privileges, type "sudo" before it:

                ` sudo command_to_run `



                - troubleshoot:

                https://www.digitalocean.com/community/questions/permission-denied-after-creating-droplet-using-ssh-keys


    * Step Seven — Set Up a Basic Firewall:

      - make sure that the firewall allows SSH connections so that we can log back in next time. We can allow these connections by typing:

        ` sudo ufw allow OpenSSH `

        -  enable the firewall:

          ` sudo ufw enable `

        - see that SSH connections are still allowed:

          ` sudo ufw status `

          - If you install and configure additional services, you will need to adjust the firewall settings to allow acceptable traffic in:

              https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands




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



## Turn off Droplet


    - powering off your Droplet through the command line = better


          ` sudo shutdown -h now `

    - when you power off your Droplet you are still billed for it ...because your diskspace, CPU, RAM, and IP address are all reserved while it is powered off.
