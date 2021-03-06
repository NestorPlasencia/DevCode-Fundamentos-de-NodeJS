'use strict';
var express = require('express');
var router = express.Router();
var User = require('./models').User;

router.route('/ingresar/')
	.get(function(req,res){
		var context = {
			error_message: req.flash('error')[0]
		}
		res.render('user/login.html', context);
	});

router.route('/registrar/')
	.get(function(req,res){
		res.render('user/register.html');
	})
	.post(function(req,res){
		var user = new User({
			username : req.body.username,
			password : req.body.password
		})
		user.save(function(err){
			if (err) {
				console.log(err);	
			}else{
				res.redirect('/ingresar/');
			}			
		})
		console.log(req.body);
	});

module.exports = router;