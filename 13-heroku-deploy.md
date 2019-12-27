## Deploy To Heroku

    - create `Procfile`

        ` heroku login `

        `  heroku create ang6-crud `

        ` heroku git:remote -a ang6-crud `

        `  heroku config:add NODE_ENV=production
        `

        ` heroku logs `//check for deployment errors




    - add `Node Buildpack` via Heroku UI

    * Add mLab/MongoDb as add on:

        ` heroku addons:create mongolab `//creates connection string + auto-populates config variable via Heroku UI

    * Get connection URI:

        ` heroku config:get MONGODB_URI
        `

        - change DB connection string in `routes/api.js` + in `data/load-sample-data.js`

    * Add/push App:

        `  git add . `

        ` git commit -m "ng build" `

        ` git push -u origin master `

        ` git push heroku master `

# Note: Don't forget to add any additional env variables via Heroku GUI
