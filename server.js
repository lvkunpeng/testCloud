/**
 *
 * Created by lvxing on 12/10/17.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get("/tablist",function (req,res) {
    res.send("")
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('模拟接口服务已经在：http://%s:%s', host, port+"启动");
});
