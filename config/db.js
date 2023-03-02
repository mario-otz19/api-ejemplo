require('dotenv').config();
const { Sequelize } = require('sequelize');

// one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle'

const { 
    DB_NAME, 
    DB_USER, 
    DB_PASS, 
    DB_HOST, 
    DB_PORT, 
    DB_ENGINE 
} = process.env;

module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_ENGINE
});