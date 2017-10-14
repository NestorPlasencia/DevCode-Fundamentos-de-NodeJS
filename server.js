'use strict';
var express =  require('express'); 
var server = express();
var port = process.env.PORT || 8000; 
var swig = require('swig');
var bodyParser = require('body-parser');

server.listen(port, function(req,res) {
	console.log('El servidor esta escuchando en el puerto '+ port);
}); 

server.engine('html',swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

server.use(express.static(__dirname + '/public'));

server.use(bodyParser.urlencoded({ extended: false}));

require('./routers')(server);