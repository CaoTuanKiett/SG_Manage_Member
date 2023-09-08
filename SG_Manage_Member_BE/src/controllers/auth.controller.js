const authModels = require('../models/auth.models');

class authController {
  register = async (req, res, next) => {
    try {
      const data = req.body;
      const result = await authModels.register(data);
      res.status(200).json({ message: 'Register Success' });
    } catch (error) {
      next(error);
      res.status(401).json({ message: 'Register Failed', error: error });
      console.log(error);
    }
  }

  login = async (req, res, next) => {
    try {
      const data = req.body;
      const result = await authModels.login(data);
      res.status(200).json({ message: 'Login Success', token: result });
    } catch (error) {
      next(error);
      res.status(401).json({ message: 'Login Failed', error: error });
      console.log(error);
    }
  }
}

module.exports = new authController();