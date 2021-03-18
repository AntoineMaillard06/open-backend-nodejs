const mysql = require('mysql');
const mongoose = require('mongoose');

class Database {
  constructor (dbConfig) {
    try {
      if (dbConfig.used) {
        dbConfig.datas.forEach((db) => {
          this[db.name] = db.type === 'mysql'
            ? mysql.createPool(db.conn)
            : mongoose.createConnection(db.conn.uri, db.conn.options);
        });
      }
    } catch (err) {
      console.log('Error in Database config');
      console.log('Detailed error: ', err);
    }
  }
}

module.exports = Database;
