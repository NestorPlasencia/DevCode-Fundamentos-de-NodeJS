'use strict'
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var local = function (server) {
	passport.use(new LocalStrategy({
			usernameField : 'username',
			passwordField : 'password',	
		},
		function (username,password,done) {

			console.log(username);
			console.log(password);
		}
	));

	server.post('/login',passport.authenticate('local', {
		successRedirect : '/',
		failureRedirect : '/ingresar/',
		failureFlash : true,
	}))
};

module.exports = local;