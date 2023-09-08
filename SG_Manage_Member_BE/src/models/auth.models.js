const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const knex = require('../database/connectDB');

const {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
} = require('../middleware/hash');

class authModels {
  tableName = 'account';
  id = 'id';
  idUser = 'idUser';
  username = 'username';
  password = 'password';
  salt = 'salt';
  create_at = 'create_at';
  create_by = 'create_by';

  register = (data) => {
    return knex(this.tableName).where(this.username, data.username).then((result) => {
      if (result.length > 0) {
        return Promise.reject({ message: 'Username already exists' });
      } else {
        const { salt, hashedPassword } = hashPassword(data.password);
        return knex(this.tableName).insert({
          username: data.username,
          password: hashedPassword,
          salt: salt,
          create_at: data.create_at,
          create_by: data.create_by,
        });
      }
    }

    );

  }

  login = (data) => {
    return knex(this.tableName).where(this.username, data.username).then((result) => {
      if (result.length > 0) {
        const account = result[0];
        if (comparePassword(account.password, account.salt, data.password)) {
          const payload = {
            id: account.id,
            username: account.username,
            password: account.password,
            salt: account.salt,
            create_at: account.create_at,
            create_by: account.create_by,            
          };
          const token = generateToken(payload);
          account.token = token;

          return Promise.resolve(account, payload);
        } else {
          return Promise.reject({ message: 'Wrong password' });
        }
      } else {
        return Promise.reject({ message: 'Username does not exist' });
      }
    });
  }

}

module.exports = new authModels();