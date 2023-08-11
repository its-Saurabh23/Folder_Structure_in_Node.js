const express = require('express');
const UserController = require('../controller/controller')
const routes = express.Router();


routes.get('/',UserController.users);


module.exports = routes;

