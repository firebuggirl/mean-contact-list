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
