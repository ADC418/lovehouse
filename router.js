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

app.get('/gyqy', function (req, res) {
    res.render('gyqy')
})

app.get('/cwyz', function (req, res) {
    res.render('cwyz')
})

app.get('/wyzf', function (req, res) {
    res.render('wyzf')
})

app.get('/swhz', function (req, res) {
    res.render('swhz')
})

app.get('/xwkx', function (req, res) {
    res.render('xwkx')
})

app.get('/jfgz', function (req, res) {
    res.render('jfgz')
})
app.get('/more', function (req, res) {
    res.render('more')
})
module.exports = {
    app
}