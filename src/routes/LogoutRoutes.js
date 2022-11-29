const express  = require('express');
const router   = express.Router();

const { logout } = require('../controller/LoginController');

router.get('/', logout);

module.exports = router;