'use strict';
var router_main = require('../apps/main/controllers.js');
var routers = function(server) {
	server.use('/', router_main)
};
module.exports = routers;