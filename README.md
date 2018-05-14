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





## Load Sample Data

    ` npm install -g json-server `

    ` json-server data/db.json `

    ` npm install faker lodash --save-dev`



    - if json-server is closed will lose data that is in memory, BUT if run ` s ` in console before closing server, a snapshot will be created

    run ` json-server contacts.js `

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
