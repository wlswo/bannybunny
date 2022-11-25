const express = require("express");
const router = express.Router();
const {
  googleLogin,
  googleCallBack,
  authSuccess,
} = require("../controller/LoginController");

/** 구글 로그인 */
router.get("/google", googleLogin);
router.get("/google/callback", googleCallBack, authSuccess);

module.exports = router;
