var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
var path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

//添加文档
app.post('/saveDoc', function(req, res) {
	console.log();
	console.log(req.body);

})

//静态资 TODO:需要屏蔽服务端文件
app.use(express.static(path.join(__dirname)));　

//启动服务
var port='8881';
var server = app.listen(port, function() {
	console.log('------------------------------------------');
	console.log(' 点它:                           　　   ')
	console.log(' http://%s:%s/views/index.html ', 'localhost', port)
	console.log('------------------------------------------');
});
