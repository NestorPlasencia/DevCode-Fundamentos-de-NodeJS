'use strict';
var http = require('http');

var server = http.createServer(function(req,res){
	console.log("Se esta haciendo una peticion")
});

server.listen(8000, function(req,res) {
	console.log('El servidor esta corriendo en el puerto '+ 8000)
});

server.on('request', function (req,res)  {
	console.log('Estoy haciendo una peticion');
});