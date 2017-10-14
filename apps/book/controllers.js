'use strict';
var express = require('express');
var router = express.Router();
router.route('/libro/:book_slug/')
	.get(function(req,res){
		res.render('book/book_detail.html');
	});
module.exports = router;