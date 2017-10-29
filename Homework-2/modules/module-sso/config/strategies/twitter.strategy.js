// created by Yu Xu

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
      consumerKey: keys.twitter.consumerKey,
      consumerSecret: keys.twitter.consumerSecret,
      callbackURL: 'http://module-sso.teamlghr.site/auth/twitter/callback',
      passReqToCallback: true
    },
    function (req, token, tokenSecret, profile, done) {
            //var user = {};
      //      //user.email = profile.emails[0].value;
      //      user.image = profile._json.image.url;
      //      user.displayName = profile.displayName;
      //

      var user = {}
      user.id_str = profile.id; // profile.id == profile._raw.id_str
      user.token = token;     // user access token
      user.tokenSecret = tokenSecret; // user access token secret
      user.provider = "twitter";


      //console.log(profile);
      //console.log("user=");
      //console.log(user);
      done(null, user);
    }))
};
