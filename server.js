var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(3000,function(){
	console.log('Servidor rodando em localhost:3000');
});