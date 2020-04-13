# Notes 2020

- added `http://localhost:7777/callback` allowed callback urls

- web origins => http://localhost:7777, http://localhost:4200

- logout urls => http://localhost:7777, http://localhost:4200

`npm install auth0-js@latest --save`


- added to `app-routing.module`

  ```js
   {
    path: 'callback',
    component: CallbackComponent
  },
  ```
