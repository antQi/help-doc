var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	path = require("path"),
	file = require('./ctrl/file.js');


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

//获取文档
app.get('/getDoc',function(req,res){
	if(req.query.key){
		file.read(__dirname+'/doc/views/'+req.query.key+'.html').fail(function(err){
			res.send({
				code: false,
				msg: '获取关联文件失败.'
			});
			res.end();
		}).then(function(data){
			res.send({code:true,msg:data});
			res.end();
		})
	}else{
		res.send();
		res.end();
	}
})

//添加文档
app.post('/saveDoc', function(req, res) {
	var key = req.body.key;
	var doc = req.body.doc;

	//保存html
	var info = {
		path: __dirname + '/doc/views/' + key + '.html',
		file: doc,
		type: 'html'
	}
	file.save(info).fail(function(err) {
		res.send(err);
	}).then(function(result) {
		//获取help.json
		file.read('./doc/help.json').fail(function(err) {
			res.send({
				code: false,
				msg: '关联文件失败.'
			});
			res.end();
		}).then(function(data) {
			//修改关联
			var helpJson=data?JSON.parse(data):{};

			helpJson[key] = key + '.html';
			//保存关联文件
			file.save({
				path: __dirname + '/doc/help.json',
				file: JSON.stringify(helpJson),
				type: 'json'
			}).fail(function(err) {
				res.send(err);
				res.end();
			}).then(function(result) {
				res.send(result);
				res.end();
			})
		})
	})
})

//启动服务
var server = {
	port: '8888',
	domain: 'localhost',
	start: function() {
		app.listen(server.port, function() {
			console.log('------------------------------------------');
			console.log(' 点它:                           　　   ')
			console.log(' http://%s:%s/views/index.html ', server.domain, server.port)
			console.log('------------------------------------------');
		});
	}
}
server.start();
