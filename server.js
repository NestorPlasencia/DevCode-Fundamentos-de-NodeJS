'use strict';
var express =  require('express'); 
var server = express();
var port = process.env.PORT || 8000; 
var swig = require('swig');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session  = require('express-session');


server.listen(port, function(req,res) {
	console.log('El servidor esta escuchando en el puerto '+ port);
}); 

server.engine('html',swig.renderFile);
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

server.use(express.static(__dirname + '/public'));

server.use(bodyParser.urlencoded({ extended: false}));

server.use(cookieParser());

server.use(session({
	secret: 'keyborad cat',
	resave: false,
	saveUninitialized: true	
}));

require('./config/passport')(server);

require('./routers')(server);