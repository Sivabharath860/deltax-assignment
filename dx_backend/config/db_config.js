const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'spotify',
    multipleStatements: true
});

mysqlConnection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
});


module.exports = mysqlConnection;
