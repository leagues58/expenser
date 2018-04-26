var mysql = require('mysql');

// credentials for the db connection are stored separately for security
var creds = require('./../expenser_db_cred');

module.exports = {

    connection: mysql.createConnection({
        host: creds.host,
        user: creds.user,
        password: creds.password,
        database: creds.database
      })
      
};