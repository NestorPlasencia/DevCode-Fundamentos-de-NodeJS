'use strict';
var express =  require('express'); 
var server = express();
var port = process.env.PORT || 8000; 
var swig = require('swig');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session  = require('express-session');
var flash = require('connect-flash');
var RedisStore = require('connect-redis')(session)

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
	store: new RedisStore({
		host: '127.0.0.1',
		port: 6379,
		db: 1,
	}), 
	secret: 'keyborad cat',
	resave: false,
	saveUninitialized: true	
}));

server.use(flash());

require('./config/passport')(server);

require('./routers')(server);