var passport         = require('passport');
var GoogleStrategy   = require('passport-google-oauth2').Strategy;

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
  }, function(request, accessToken, refreshToken,profile, email,done){
    console.log('email: ', email.email);
    var user = email.email;

    done(null, user);
  }
));

module.exports = passport;