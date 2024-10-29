const sql = require('mssql');

const config = {
    server: 'Admin1\\SQLEXPRESS',
    database: 'Library',
    user: 'alex',
    password: 'admin',
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
    port: 1433
};

module.exports = config;