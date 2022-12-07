const express = require("express");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("../../config/middlewares");
const passport = require('passport');
const {refresh_Token} = require('../controller/LoginController');
const User = require("../models/User");

/** localhost:3001/auth */

// router.route("/google").get(googleLogin);
// router.route("/google/callback").get(googleCallback);
router.route("/kakao").get(passport.authenticate('kakao'));
router.route("/kakao/callback").get(passport.authenticate('kakao',{failureRedirect:'/',}), (req,res)=>{
  res.cookie("user",req.user);
  res.redirect("http://localhost:3000");
});

module.exports = router;
