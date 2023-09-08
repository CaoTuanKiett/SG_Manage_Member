const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function hashPassword(plainPassword) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(plainPassword, salt);

  return { hashedPassword, salt };
}

function comparePassword(hashedPassword, salt, plainPassword) {
  const hash = bcrypt.hashSync(plainPassword, salt);
  return hash === hashedPassword;
}

function generateToken(payload) {
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secretKey);
  return token;
}

function verifyToken(token) {
  const secretKey = process.env.JWT_SECRET;
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};
