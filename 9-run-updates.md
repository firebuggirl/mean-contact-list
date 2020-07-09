# Run/check for updates

`npm outdated`

`npm update`

# Angular

`ng update`

`ng update --all`

  - ERROR in The Angular Compiler requires TypeScript >=3.4.0 and <3.5.0 but 3.5.1 was found instead.

`npm i typescript@3.4.5 --save-dev`

`ng build`

## Update to Angular 9

https://www.youtube.com/watch?v=TcdhAxDWWxM&feature=youtu.be&utm_source=email-sendgrid&utm_term=13952972&utm_medium=833442&utm_content=educational&utm_campaign=2020-02-06

- `Ivy` => new rendering engine => an under the hood change => smaller bundles...ie., less code for users to download => faster

- running `ng serve` => runs ahead of time compilation (rather than just in time compilation) => can be some bugs =>

## New Options for error handling

- `Basic Mode`

- `Full Mode`

- `Strict Mode` => to enable => `tsconfig.app.json` => https://angular.io/guide/angular-compiler-options => can add:

  ```json
    "angularCompilerOptions": {
      "fullTemplateTypeCheck": true,
      "preserveWhitespaces": true,
                ...
    }
    ```

  - if add:

  ```json
   "strictTemplates": true
   ```// get more errors for troubleshooting/checking..avoid extra mistakes

## Minor Breaking Changes

https://update.angular.io/

- if using `@ViewChild` => have to add `static` option:

   ```js
   @ViewChild({static: true})
   ```

  - or if already had (in Angular 8):

  ```js
   @ViewChild({static: false})
   ```

  - remove `false`

   ```js
   @ViewChild()
   ```

`cd ./`

`ng update @angular/cli @angular/core`//error => Repository is not clean. Please commit or stash any changes before updating In Angular 8 => see  https://stackoverflow.com/questions/56773528/repository-is-not-clean-please-commit-or-stash-any-changes-before-updating-in-a

- try:

`ng update @angular/cli @angular/core --allow-dirty`

- `aside` => enabled anonymous usage data w/ http://angular.io/analytics
 
  - To disable: `ng analytics project off`

- If you depend on many Angular libraries you may consider `speeding up your build` by invoking the ngcc (Angular Compatibility Compiler) in an npm postinstall script => https://update.angular.io/#8.1:9.0 => add this to `package.json` => can run ngcc after each installation of node_modules by adding a postinstall

```json
"postinstall": "ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points"
```//Breaks deploy to Heroku..actually, might not have been the case...had a space in beginning of Procfile

## Upgrade to Angular 10 => 7/9/2020

- `Bug` =>  Repository is not clean. Please commit or stash any changes before updating.

 `ng update @angular/cli @angular/core --allow-dirty`//fails

- incompatible dependencies...

 `npm uninstall @angular/http --save`

 `ng update @angular/cli @angular/core --allow-dirty --force`

- New bug upon updating:

 - Uncaught Error: It looks like your application or one of its dependencies is using i18n. Angular 9 introduced a global `$localize()` function that needs to be loaded.

 - run `ng add @angular/localize` from the Angular CLI

### updates in v10:

https://blog.angulartraining.com/whats-new-in-angular-10-be249ed2ac2

- TypeScript 3.9, TSLib 2.0, & TS Lint v6

- `date range picker` in Angular Material 10

- Warnings when using CommonJS imports as they can result in both larger and slower applications.

- Optional stricter settings => can create new projects with a strict flag w/ stricter listing rules, bundle sizes => more efficient tree-shaking (ie., dead code elimination).

