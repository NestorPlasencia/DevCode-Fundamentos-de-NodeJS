'use strict';
var router_main = require('../apps/main/controllers.js');
var router_user = require('../apps/user/controllers.js');

var routers = function(server) {
	server.use('/', router_main);
	server.use('/', router_user);
};
module.exports = routers;