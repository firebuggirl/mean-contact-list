# Ang6Crud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Update Angular while running Server

    - in one terminal run ` ng build --watch `

    - in 2nd terminal run ` npm run serve `


## Load Sample Data

    - In another project/directory:

        - Generate Mock JSON data with `JSON-server`, `faker.js` and `lodash`

        - https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server

        http://marak.github.io/faker.js/index.html

    - ` npm run sample `

## Delete Sample Data

    - ` npm run blowitallaway `

## Validate JSON

    https://jsonlint.com/


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


## Deploy To Heroku

    - create `Procfile`

        ` heroku login `

        `  heroku create ang6-crud `

        ` heroku git:remote -a ang6-crud `

        `  heroku config:add NODE_ENV=production `

        ` heroku logs `//check for deployment errors

    - add `Node Buildpack` via Heroku UI

    * Add mLab/MongoDb as add on:

        ` heroku addons:create mongolab `//creates connection string + auto-populates config variable via Heroku UI

    * Get connection URI:

        ` heroku config:get MONGODB_URI `

        - change DB connection string in `routes/api.js` + in `data/load-sample-data.js`

    * Add/push App:

        `  git add . `

        ` git commit -m "ng build" `

        ` git push -u origin master `

        ` git push heroku master `

# Note: Don't forget to add any additional env variables via Heroku GUI

## Enable Auth locally

      ` mongod --port 27017  `

      ` mongo `

      ` use admin `

      `  db.createUser(
            {
              user: "myUserAdmin",
              pwd: "password",
              roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
            }
          ) `



    - Disconnect the mongo shell.

    - restart:

    ` mongod --auth  `

    ` mongo -u "myUserAdmin" -p "password" --authenticationDatabase "admin" `


      ` use admin
        db.auth("myUserAdmin", "password" ) `

        - Change password:

        ` db.changeUserPassword("myUserAdmin", "<new-password>") `

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

## To do:

    - Add search functionality

        ` ng g c contact-search `

    - Add authentication with Auth0

        ` npm i auth0-js --save `

        ` ng g guard guard/auth --module app.module ``

        ` ng g s auth/auth `

        ` ng g c login `

        ` ng g c callback `


## Pagination

    https://github.com/michaelbromley/ngx-pagination#server-side-paging



## Adding prerender-node

https://github.com/prerender/prerender-node

  `  npm install prerender-node --save `

  ` app.use(require('prerender-node')); `

  - Or if you have a token/account on `prerender.io`:

  - https://prerender.io/

      ` app.use(require('prerender-node').set('prerenderToken', 'YOUR_TOKEN')); `

  - in `Heroku` Config variables UI:

 `  heroku config:set PRERENDER_TOKEN=YOUR_TOKEN `


  -  add ` <meta name="fragment" content="!"> ` to the <head> of all of your pages

  * Testing locally:


      ` localhost:7777/?_escaped_fragment_= `


## Check for vulnerabilities


      ` snyk test `


      - OR


      ` npm audit `

      ` npm audit fix `

      - https://go.npm.me/audit-guide
