const express = require("express");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("../../config/middlewares");
const passport = require('passport');
const {refresh_Token} = require('../controller/LoginController');
const {verifyToken, makeAccessToken, makeRefreshToken} = require('../../utils/jwt');
const User = require("../models/User");

/** localhost:3001/auth */

// router.route("/google").get(googleLogin);
// router.route("/google/callback").get(googleCallback);
router.route("/kakao").get(passport.authenticate('kakao'));
router.route("/kakao/callback").get(passport.authenticate('kakao',{failureRedirect:'/',}), (req,res)=>{
  return res.status(200).redirect("localhost:3000");
});

router.route("/silent-refresh").post(refresh_Token);
module.exports = router;
