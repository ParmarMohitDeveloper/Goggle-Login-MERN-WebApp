const express = require('express');
const Router = express.Router();
const { googleAuth } = require('../controllers/authController');

Router.post("/google", googleAuth); // ✅ changed from GET → POST
module.exports = Router;
