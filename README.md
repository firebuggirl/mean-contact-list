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

    - in 2nd terminal run ` npm run server `


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

    - add `Node Buildpack` via Heroku UI

## Add mLab/MongoDb as add on:

    ` heroku addons:create mongolab `//creates connection string + auto-populates config variable via Heroku UI

## Get connection URI:

    ` heroku config:get MONGODB_URI `

    - change DB connection string in `routes/api.js` + in `data/load-sample-data.js`

## Add/push App:

    `  git add . `

    ` git commit -m "ng build" `

    ` git push -u origin master `

    ` git push heroku master `

# Note: Don't forget to add any additional env variables via Heroku GUI


## To do:

    - Add search functionality

    - Add authentication with Auth0
