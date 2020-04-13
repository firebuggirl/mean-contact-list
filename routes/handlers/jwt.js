 const jwt = require('express-jwt');
 const jwks = require('jwks-rsa');

 require('dotenv').config({ path: '../../variables.env' });
// /*
//  |--------------------------------------
//  | Authentication Middleware
//  |--------------------------------------
//  */

const authHandlers = {};


authHandlers.jwtCheck = function(app) {
  // Authentication middleware

  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: process.env.AUTH0_API_AUDIENCE,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithm: 'RS256'
  });
}


  authHandlers.adminCheck = function(app) {

 // Check for an authenticated admin user
     const adminCheck = (req, res, next) => {
      const roles = req.user[process.env.NAMESPACE] || [];
      if (roles.indexOf('admin') > -1) {
        next();
      } else {
        res.status(401).send({message: 'Not authorized for admin access'});
      }
    }
  }

  function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }

  module.exports = authHandlers;
