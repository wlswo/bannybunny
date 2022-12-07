const express = require('express');
const router = express.Router();
const axios = require('axios')
const UserService = require('../services/UserService');

exports.logout = (req, res) => {
    req.logout(function(err) {
        if (err) { return res.status(400).end(); }
        res.send({status:"success"});
    });
}