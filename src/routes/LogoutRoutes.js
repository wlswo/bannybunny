const express  = require('express');
const router   = express.Router();

const { logout } = require('../controller/LoginController');

router.post('/', logout);

module.exports = router;