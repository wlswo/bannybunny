var passport           = require('passport');
const User             = require('../src/models/User');
const GoogleStrategy   = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID      : process.env.GOOGLE_CLIENT_ID,
    clientSecret  : process.env.GOOGLE_SECRET,
    callbackURL   : '/auth/google/callback',
    passReqToCallback   : true
  }, async function(request, accessToken, refreshToken, email, done){
    User.findOrCreate({email: email.email}, (err, user)=> {
        done(null, user);
    });
  }
));

module.exports = passport;