'use strict'

var mongoose = require('../../config/mongoose');

var userSchema = require('./schemas').userSchema;

var models = {
	User : mongoose.model('user',userSchema)
};

module.exports = models;