'use strict';
var express = require('express');
var router = express.Router();
router.route('/')
	.get(function(req,res){
		console.log(req.user);
		res.render('main/index.html')
	});
module.exports = router;