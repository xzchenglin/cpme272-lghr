var passport3 = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function (app) {

  app.use(passport3.initialize());
  app.use(passport3.session());
  passport3.serializeUser(function (user, done) {
    done(null, user);
  });
  passport3.deserializeUser(function (user, done) {
    done(null, user);
  });

  const keys = require("../../keys");


  passport3.use(new TwitterStrategy({
      consumerKey: keys['twitter'].consumerKey, // 'T4xpAE2Jy5P1KgnmC5TAfiXSi',
      consumerSecret: keys.twitter.consumerSecret, //'mmMORcdCBHN6cKbHoOrUBYfSJzzIeGu4RwzD5EzLfGNq4Tz1eM',
      callbackURL: 'https://www.teamlghr.site/auth/twitter/callback',
      passReqToCallback: true
    },
    function (req, token, tokenSecret, profile, done) {
      //      var user = {};
      //      //user.email = profile.emails[0].value;
      //      user.image = profile._json.image.url;
      //      user.displayName = profile.displayName;
      //
      //      user.twitter = {};
      //      user.twitter.id = profile.id;
      //      user.twitter.token = token;
      console.log(profile);
      done(null, profile);

    }))
};
