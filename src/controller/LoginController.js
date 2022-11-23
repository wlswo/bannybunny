var passport = require('../../config/passport');

exports.googleLogin = passport.authenticate('google', { scope: ['profile','email'] });
 
exports.googleCallBack = passport.authenticate('google');

exports.authSuccess = (req, res) => {
    res.send(req.user);
}

exports.logout = (req, res) => {
    req.logout(function(err) {
        if (err) { return res.status(400).end(); }
        return res.status(200).end();
    });
}