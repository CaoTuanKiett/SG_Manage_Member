require('dotenv').config();
const db = require('./connectDB');

const databaseName = process.env.DB_NAME;

db.raw(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`)
  .then((result) => {
    if (result[0].warningStatus === 0) {
      console.log('Cơ sở dữ liệu đã tồn tại');
    } else {
      console.log('Đã tạo database');
      // Kết nối với cơ sở dữ liệu
      return db.raw(`USE \`${databaseName}\`;`);
    }
  })
  .then(() => {
    return db.schema.hasTable('polls').then((exists) => {
      if (!exists) {
        // Tạo bảng "polls"
        return db.schema.createTable('polls', function(table) {
          table.increments('id').primary();
          table.string('title');
          table.string('create_at');
          table.string('create_by');
          // Thêm các trường khác cần thiết
        });
      } else {
        console.log('Bảng "polls" đã tồn tại');
      }
    });
  })
  .then(() => {
    // Tiếp tục kiểm tra và tạo các bảng khác
    return db.schema.hasTable('options').then((exists) => {
      if (!exists) {
        // Tạo bảng "options"
        return db.schema.createTable('options', function(table) {
          table.increments('id').primary();
          table.integer('poll_id').unsigned();
          table.foreign('poll_id').references('polls.id');
          table.string('text');
          // Thêm các trường khác cần thiết
        });
      } else {
        console.log('Bảng "options" đã tồn tại');
      }
    });
  })

  .then(() => {
    // Tiếp tục kiểm tra và tạo các bảng khác
    return db.schema.hasTable('account').then((exists) => {
      if (!exists) {
        // Tạo bảng "account"
        return db.schema.createTable('account', function(table) {
          table.increments('id').primary();
          table.string('username');
          table.string('password');
          table.string('salt');
          table.string('create_at');
          table.string('create_by');
          // Thêm các trường khác cần thiết
        });
      } else {
        console.log('Bảng "account" đã tồn tại');
      }
    });
  })

  .then(() => {
    // Tiếp tục kiểm tra và tạo các bảng khác
    return db.schema.hasTable('users').then((exists) => {
      if (!exists) {
        // Tạo bảng "users"
        return db.schema.createTable('users', function(table) {
          table.increments('id').primary();
          table.integer('id_account').unsigned();
          table.foreign('id_account').references('account.id');
          table.string('name');
          table.string('email');
          table.string('phone');
          table.string('address');
          table.string('role');
          table.string('create_at');
          table.string('create_by');
          // Thêm các trường khác cần thiết
        });
      } else {
        console.log('Bảng "users" đã tồn tại');
      }
    });
  })
  

  .then(() => {
    // Tiếp tục kiểm tra và tạo các bảng khác
    return db.schema.hasTable('user_options').then((exists) => {
      if (!exists) {
        // Tạo bảng "user_options"
        return db.schema.createTable('user_options', function(table) {
          table.integer('user_id').unsigned();
          table.foreign('user_id').references('users.id');
          table.integer('option_id').unsigned();
          table.foreign('option_id').references('options.id');
          // Thêm các trường khác cần thiết
        });
      } else {
        console.log('Bảng "user_options" đã tồn tại');
      }
    });
  })
  .then(() => {
    console.log('Tạo bảng thành công hoặc bảng đã tồn tại');
    // db.destroy();
  })
  .then(() => {
    console.log('Tạo bảng thành công hoặc bảng đã tồn tại');

    // Thêm dữ liệu vào bảng "polls"
    return db('polls').insert([
      { title: 'Khảo sát 1', create_at: '2023-09-11', create_by: 'Admin' },
      { title: 'Khảo sát 2', create_at: '2023-09-12', create_by: 'Admin' },
      // Thêm các dòng dữ liệu khác nếu cần
    ]);
  })
  .then(() => {
    console.log('Dữ liệu đã được chèn vào bảng "polls"');

    // Thêm dữ liệu vào bảng "options"
    return db('options').insert([
      { poll_id: 1, text: 'Tùy chọn A' },
      { poll_id: 1, text: 'Tùy chọn B' },
      { poll_id: 2, text: 'Tùy chọn X' },
      { poll_id: 2, text: 'Tùy chọn Y' },
      // Thêm các dòng dữ liệu khác nếu cần
    ]);
  })
  .then(() => {
    console.log('Dữ liệu đã được chèn vào bảng "options"');

    // Thêm dữ liệu vào bảng "account"
    return db('account').insert([
      { username: 'user1', password: 'hashedPassword1', salt: 'salt1', create_at: '2023-09-11', create_by: 'Admin' },
      { username: 'user2', password: 'hashedPassword2', salt: 'salt2', create_at: '2023-09-12', create_by: 'Admin' },
      // Thêm các dòng dữ liệu khác nếu cần
    ]);
  })
  .then(() => {
    console.log('Dữ liệu đã được chèn vào bảng "account"');

    // Thêm dữ liệu vào bảng "users"
    return db('users').insert([
      { id_account: 1, name: 'Người dùng 1', email: 'user1@example.com', phone: '123456789', address: 'Địa chỉ 1', role: 'user', create_at: '2023-09-11', create_by: 'Admin' },
      { id_account: 2, name: 'Người dùng 2', email: 'user2@example.com', phone: '987654321', address: 'Địa chỉ 2', role: 'user', create_at: '2023-09-12', create_by: 'Admin' },
      // Thêm các dòng dữ liệu khác nếu cần
    ]);
  })
  .then(() => {
    console.log('Dữ liệu đã được chèn vào bảng "users"');

    // Thêm dữ liệu vào bảng "user_options"
    return db('user_options').insert([
      { user_id: 1, option_id: 1 },
      { user_id: 1, option_id: 2 },
      { user_id: 2, option_id: 3 },
      { user_id: 2, option_id: 4 },
      // Thêm các dòng dữ liệu khác nếu cần
    ]);
  })
  .then(() => {
    console.log('Dữ liệu đã được chèn vào bảng "user_options"');
    db.destroy(); // Đóng kết nối cơ sở dữ liệu sau khi đã chèn dữ liệu
  })
  .catch((error) => {
    console.error('Lỗi khi thao tác với cơ sở dữ liệu:', error);
    db.destroy(); // Đóng kết nối cơ sở dữ liệu nếu có lỗi
    throw error;
  });


