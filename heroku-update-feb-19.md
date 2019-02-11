## Heroku Node.js Build Script Change FAQ

https://help.heroku.com/P5IMU3MP/heroku-node-js-build-script-change-faq




  - add this to package.json so that ng build script does NOT run on Heroku:


      `   "heroku-postbuild": "echo Skip builds on Heroku"
      `

  - Run to see status by upcoming Heroku changes:

      ` npx @heroku/update-node-build-script `
