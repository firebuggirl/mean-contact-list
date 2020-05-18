# Enable Auth locally

  `mongod --port 27017`

  `mongo`

  `use admin`

  ```js
        db.createUser(
            {
              user: "myUserAdmin",
              pwd: "password",
              roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
            }
          ) 
    ```


- Disconnect from mongo shell

- restart:

    `mongod --auth`

    ```js
    mongo -u "myUserAdmin" -p "password" --authenticationDatabase "admin"
    ```


    ```js
     use admin
     db.auth("myUserAdmin", "password" ) 
    ```

- Change password:

  `db.changeUserPassword("myUserAdmin", "<new-password>")`

    * NOTE:

       - By default, db.changeUserPassword() sends all specified data to the MongoDB instance in cleartext. Use TLS transport encryption to protect communications between clients and the server

          ...see Configure mongod and mongos for TLS/SSL

          https://docs.mongodb.com/manual/tutorial/configure-ssl/

         MongoDB does not store the password in cleartext. ..only vulnerable in transit.. and only if TLS transport is not enabled.



        - Once authenticated as the user administrator, use `db.createUser()` to create additional users. You can assign any built-in roles or user-defined roles to the users.


        - The database where you create the user (in this example, test) is that user’s authentication database.


        * Create user w/ readWrite permissions

                ` use ang6-crud

                  db.createUser(
                    {
                      user: "newUser",
                      pwd: "newPassword",
                      roles: [ { role: "readWrite", db: "ang6-crud" } ]
                    }
                  ) `

                * remove/get user(s) (from `admin` db logged in as admin)

                 ` db.dropUser("username") `

                 `  db.getUsers() `

                  ` mongo  -u "newUser" -p "newPassword" --authenticationDatabase "ang6-crud" `

                  ` use ang6-crud `

                  ` db.auth("newUser", "newPassword") `

                  - add Auth0 variables to Heroku UI

      * Aug 3, 2018


        - ` mongod `//note: --auth flag is causing app to crash??? Users are successfully authenticated w/out --auth flag when app is running...MongoDB V 3.6 + Node V 8.9..hmmm...come back later

        `  mongo --port 27017 -u admin -p password --authenticationDatabase admin `

        ` use admin `

      `  db.auth('admin', 'password') `

      ` use ang6-crud `

      `  db.createUser(
            {
              user: "",
              pwd: "",
              roles: [
                 { role: "readWrite", db: "ang6-crud" }
              ]
            }
        ); `

        ` db.auth('newUser', 'newUserPassword') `


        ` mongo -u newUser -p newUser --authenticationDatabase ang6-crud `



              `  db.createUser(
                    {
                      user: "testReader",
                      pwd: "testReader",
                      roles: [
                         { role: "read", db: "ang6-crud" }
                      ]
                    }
                ); `

                ` mongo -u testReader -p testReader --authenticationDatabase ang6-crud `

                ` use ang6-crud `

                ` db.auth('testReader', 'testReader') `

                * test user auth:


                    ` db.contacts.findOne() `

                    ` db.contacts.updateOne({name: "Johnathan Leuschke"}, {$set: {state: "CA"}}) `

                    //returns `"codeName": "Unauthorized"`

                * Get Role info:


                    - EX:

                    ` var role = db.getRole('<role_name>', {showPrivileges: true}) `

                    ` role `
