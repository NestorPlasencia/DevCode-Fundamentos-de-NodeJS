'use strict';
var express = require('express');
var router = express.Router();
router.route('/')
	.get(function(req,res){
		res.render('main/home.html')
	});
module.exports = router;