const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'employees',
    password: ''
});

module.exports = pool.promise();