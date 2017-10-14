var express = require('express');
var passport = require('passport');
var authRouter = express.Router();

//create a google route when click on google sso
authRouter.route('/twitter/callback')
  .get(passport.authenticate('twitter', {
    successRedirect: '/users',
    failureRedirect: '/error'
  }));

authRouter.route('/twitter')
  .get(passport.authenticate('twitter'));

module.exports = authRouter;
