## Create + check Mongod logs

  - Create log directory:

      - ` cd /data ` -> ` mkdir logs `

  - Create log fileL

      - ` mongod --dbpath /data/db --logpath /data/logs/log.log`


              - may need to use `sudo`

      - ` sudo mongod --fork --logpath /data/logs/logs.log `


          - returns: child process started successfully, parent exiting

          - server is now running as a background process/service

    - Start Mongo:

        ` mongo `

    - Shut down server:

          ` use admin `

          ` db.shutdownServer `
