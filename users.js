var express = require('express');
var router = express.Router();
var url = require('url')
var { connect } = require('./db/db');
connect.connect();


//设置跨域连接
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', '*');
    next();
})
/* GET users listing. */
router.get('/', function (req, res, next) {
    // var params = url.parse(req.url, true).query;
    // console.log(params)
    var sql = `select * from housedata`;
    connect.query(sql, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            res.send({
                code: 1,
                array: data,
                msg: "success"
            });
        }
    })

});

module.exports = router;