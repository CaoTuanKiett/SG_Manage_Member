const express = require('express');
const router = express.Router();
require('dotenv').config();

const authController = require('../controllers/auth.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const authRouter = (app) => {

  router.post('/register', awaitHandlerFactory(authController.register)); // localhost:3000/api/v1/auth/register

  router.post('/login', awaitHandlerFactory(authController.login)); // localhost:3000/api/v1/auth/login

  return app.use(`${process.env.API_V1}/auth`, router);
}

module.exports = authRouter;