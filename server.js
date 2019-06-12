
const express = require("express");
const helmet = require('helmet');//initiate security headers
const app = express();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');

const angular = require('./routes/angular');
const api = require('./routes/api');
//const helpers = require('./helpers');
require('dotenv').config();

const mongoose = require('mongoose');

//const cookieParser = require('cookie-parser');
//


// ******************************************
// ROUTES
// ******************************************
// Route for Angular
app.use('/', angular);

// Route for APIs go here
app.use('/api', api);

// app.use((req, res, next) => {
//   res.locals.h = helpers;
//   res.locals.contact = req.contact || null;
//   res.locals.currentContact = req.session.contactId;
//
//   next();
// });

// manually modify middleware to check for Googlebot by their user agent directly
// https://prerender.io/documentation/google-support
// have been some reported issues with Googlebot rendering JavaScript on the first
// request to a URL that still uses the ?_escaped_fragment_= protocol
const prerender = require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN);
prerender.crawlerUserAgents.push('googlebot');
prerender.crawlerUserAgents.push('bingbot');
prerender.crawlerUserAgents.push('yandex');
app.use(prerender);



//app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN));

app.use(helmet());//get security report here: https://securityheaders.io/
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ["'self'"],
//     styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
//   }
// }));


if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file';
}

app.use(cors());

const checkJwt = jwt({
  // Dynamically provide a signing key based on the key in the header and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

const checkScopes = jwtAuthz(['read:messages']);

// Create link to Angular build directory
const distDir = __dirname + "/dist/";
//var distDir = __dirname + "/src/";
app.use(express.static(distDir));
app.use(express.static(distDir));



app.set('port', process.env.PORT || 7777);
//app.set('port', process.env.PORT || 80);//use port 80 fpr Azure deploy

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});


app.get('/api/public', function(req, res) {
  res.json({
    message: "Hello from a public endpoint! You don't need to be authenticated to see this."
  });
});

app.get('/api/private', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});
//
// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}


// you need this code so node will watch for exit signals
// node by default doesn't handle SIGINT/SIGTERM
// docker containers use SIGINT and SIGTERM to properly exit
//
// signals also aren't handeled by npm:
// https://github.com/npm/npm/issues/4603
// https://github.com/npm/npm/pull/10868
// https://github.com/RisingStack/kubernetes-graceful-shutdown-example/blob/master/src/index.js
// if you want to use npm then start with `docker run --init` to help, but I still don't think it's
// a graceful shutdown of node process, just a forced exit
//

// quit on ctrl-c when running docker in terminal
process.on('SIGINT', function onSigint () {
	console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
  shutdown();
});

// quit properly on docker stop
process.on('SIGTERM', function onSigterm () {
  console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
  shutdown();
})

// shut down server
function shutdown() {
  server.close(function onServerClosed (err) {
    if (err) {
      console.error(err);
      process.exitCode = 1;
		}
		process.exit();
  })
}
