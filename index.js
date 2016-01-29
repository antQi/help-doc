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
app.put('saveDoc', function(req, res) {
	console.log(req.body);
})

//静态资源
app.use(express.static(path.join(__dirname)));

//启动服务
var server = app.listen(8888, function() {

	console.log('打开地址这个地址吧： http://%s:%s/views/index.html', 'localhost', '8888');
});
