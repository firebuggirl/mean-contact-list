
##################
## Local Auth:
#################

    ` mongod --port 27017  `

    ` mongo `

    ` use admin `

      - myUserAdmin user only has privileges to manage users and roles.

      - if you attempt to perform any other operations, such as read from a foo collection in the test database, MongoDB returns an error.

    `  db.createUser(
        {
          user: "myUserAdmin",
          pwd: "zebramoonbeam",
          roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
        }
      ) `

      - Disconnect the mongo shell.

      - restart:

      ` mongod --auth  `

      ` mongo -u "myUserAdmin" -p "zebramoonbeam" --authenticationDatabase "admin" `

      <!-- ` mongo ` -->

      ` use admin
        db.auth("myUserAdmin", "zebramoonbeam" ) `

        - Once authenticated as the user administrator, use `db.createUser()` to create additional users. You can assign any built-in roles or user-defined roles to the users.


        - The database where you create the user (in this example, test) is that user’s authentication database.


        * Create user w/ readWrite permissions

                ` use test
                  db.createUser(
                    {
                      user: "myBean",
                      pwd: "MrBean",
                      roles: [ { role: "readWrite", db: "test" },
                               { role: "read", db: "reporting" } ]
                    }
                  ) `


                  ` mongo  -u "myBean" -p "MrBean" --authenticationDatabase "test" `

                  ` use test `

                  ` db.auth("myBean", "MrBean") `

        * Manage Users and Roles ... Come back to this...I'm not running a cluster locally

        * Create a Role to Manage Current Operations

              - The myUserAdmin has privileges to create roles in the admin as well as other databases.

              - re-connect and re-auth if disconnected from MongoDB

              - ` mongo -u myUserAdmin -p 'zebramoonbeam' --authenticationDatabase 'admin' `

              ` use admin
              //only works on clusters??
              db.createRole(
                 {
                   role: "manageOpRole",
                   privileges: [
                     { resource: { cluster: true }, actions: [ "killop", "inprog" ] },
                     { resource: { db: "", collection: "" }, actions: [ "killCursors" ] }
                   ],
                   roles: []
                 }
              ) `

              * Terminate running operations with extreme caution. Only use the db.killOp() method or killOp command to terminate operations initiated by clients and do not terminate internal database operations.!!!!!!!!!!!
##################
## Docker
##################

    ` docker run <mongo-container> `

    ` docker exec -it <container#> sh `

    ` mongo `

    ` use admin

      db.createUser(
        {
          user: "myUserAdmin",
          pwd: "zebramoonbeam",
          roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
        }
      ) `

      - stop mongo + restart (leave mongod container running....)

      ` mongo -u "myUserAdmin" -p "zebramoonbeam" --authenticationDatabase "admin" `

      ` use admin
        db.auth("myUserAdmin", "zebramoonbeam" ) `

        *  Create user w/ readWrite permissions
