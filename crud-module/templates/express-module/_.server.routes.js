'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var <%= camelizedPluralName %> = require('../../app/controllers/<%= slugifiedPluralName %>');

	// <%= humanizedPluralName %> Routes
	app.route('/<%= slugifiedPluralName %>')
		.get(<%= camelizedPluralName %>.list)
		.post(users.isAuthenticated, <%= camelizedPluralName %>.create);

	app.route('/<%= slugifiedPluralName %>/:<%= camelizedSingularName %>Id')
		.get(<%= camelizedPluralName %>.read)
		.put(users.isAuthenticated, <%= camelizedPluralName %>.isOwner, <%= camelizedPluralName %>.update)
		.delete(users.isAuthenticated, <%= camelizedPluralName %>.isOwner, <%= camelizedPluralName %>.delete);

	// Finish by binding the <%= humanizedSingularName %> middleware
	app.param('<%= camelizedSingularName %>Id', <%= camelizedPluralName %>.<%= camelizedSingularName %>ByID);
};
