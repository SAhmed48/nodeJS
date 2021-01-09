// CORE WAY
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'employees',
//     password: ''
// });

// module.exports = pool.promise();


// USING SEQUELIZE 

const { Model } = require('sequelize');
const Sequelize = require('sequelize');

const sequel = new Sequelize('employees', 'root', '', {dialect: 'mysql', host: 'localhost'});

Model.exports = sequel;