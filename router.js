var express = require('express');
var ejs = require('ejs');
var app = express();

app.engine('html', ejs.__express);
app.set('view engine', 'html');
//使用中间件
app.use(express.static('static'))


app.get('/', function (req, res) {
    res.render('index')
})
app.get('/login', function (req, res) {
    res.render('header')
})

module.exports = {
    app
}