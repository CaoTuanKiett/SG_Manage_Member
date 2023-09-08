const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const knex = require('../database/connectDB');

const {
  hashPassword,
  comparePassword,
} = require('../middleware/hash');


class userModels {
  tableName = 'users';
  idUser = 'id';
  name = 'name';
  address = 'address';
  phone = 'phone';
  role = 'role';
  email = 'email';
  create_at = 'create_at';
  create_by = 'create_by';


  createUser = (data) => {
    return knex(this.tableName).where(this.email, data.email).then((result) => {
      if (result.length > 0) {
        return Promise.reject({ message: 'Email already exists' });
      } else {
        return knex(this.tableName).insert({
          name: data.name,
          address: data.address,
          phone: data.phone,
          role: data.role,
          email: data.email,
          create_at: data.create_at,
          create_by: data.create_by,
        });
      }
    }
    );

  }

  selectAllUsers = () => {
    return knex(this.tableName).select('*');
  }
  
  

  getOneUser = (id) => {
    return knex(this.tableName).select('*').where(this.idUser, id);
  }

  // createUser = (data) => {
  //   return knex(this.tableName).insert(data);
  // }

  updateUser = (id, data) => {
    return knex(this.tableName).where(this.idUser, id).update(data);
  }

  deleteUser = (id) => {
    return knex(this.tableName).where(this.idUser, id).del();
  }


  searchUser = (key) => {
    return knex(this.tableName)
      .select(this.idUser, this.username, this.password, this.salt, this.email)
      .where( this.username, 'like', `%${key}%`)
      .orWhere(this.email, 'like', `%${key}%`);
  }


}

module.exports = new userModels();