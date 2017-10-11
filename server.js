'use strict';

var port = process.env.PORT || 8000; 

var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200, {'content_type': 'text/plain'});
	res.end("Hello World")
});

server.listen(port, function(req,res) {
	console.log('El servidor esta escuchando en el puerto '+ port)
}); 