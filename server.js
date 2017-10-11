'use strict';

var port = process.env.PORT || 8000; 

var http = require('http');

var server = http.createServer(function(req,res){
	console.log("Se esta haciendo una peticion")
});

server.listen(port, function(req,res) {
	console.log('El servidor esta escuchando en el puerto '+ port)
}); 