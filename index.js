var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	path = require("path");


//静态资 TODO:需要屏蔽服务端文件
app.use(express.static(path.join(__dirname)));　
app.use('/saveDoc', bodyParser({
	keepExtensions: true,
	limit: 10000000, // 10MB limit
	defer: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

//添加文档
app.post('/saveDoc', function(req, res) {
	console.log(req.body);
	res.send('hello world');
})


//启动服务
var server={
	port:'8888',
	domain:'localhost',
	start:function(){
		app.listen(server.port, function() {
			console.log('------------------------------------------');
			console.log(' 点它:                           　　   ')
			console.log(' http://%s:%s/views/index.html ', server.domain, server.port)
			console.log('------------------------------------------');
		});
	}
}
server.start();
