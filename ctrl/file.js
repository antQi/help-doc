var fs = require("fs"),
	Q = require('q');

//基本信息


//读取
var read = function(path) {
	var deferred=Q.defer();
	fs.readFile(path, 'utf-8', function(err,data){
		if(err){
			console.error(err)
			deferred.reject(err);
		}else{
			deferred.resolve(data);
		}
	});
	return deferred.promise;
}

//保存
var save = function(info) {

	var deferred=Q.defer();
	fs.writeFile(info.path, info.file, function(err) {
		if (err) {
			console.error(err);
			deferred.reject({code:false,msg:'保存失败'})
		}else{
			deferred.resolve({code:true,msg:'保存成功'})
		}
	});
	return deferred.promise;
}

exports.save = save;
exports.read = read;
