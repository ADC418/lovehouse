var mysql = require('mysql');

var connect = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "lovehouse"
});

module.exports = {
    connect
}