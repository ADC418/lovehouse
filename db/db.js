var mysql = require('mysql');

var connect = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "111111",
    database: "users"
});

module.exports = {
    connect
}