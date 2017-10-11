'use strict';
var express =  require('express'); 
var server = express();
var port = process.env.PORT || 8000; 

server.listen(port, function(req,res) {
	console.log('El servidor esta escuchando en el puerto '+ port);
}); 

server.get('/',function(req,res){
	res.send('Hello World');
});