'use strict';
var express = require('express');
var router = express.Router();

router.route('/ingresar/')
	.get(function(req,res){
		res.render('user/login.html');
	});

router.route('/registrar/')
	.get(function(req,res){
		res.render('user/register.html');
	})
	.post(function(req,res){
		console.log(req.body);
	});

module.exports = router;