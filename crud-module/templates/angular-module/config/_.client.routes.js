'use strict';

//Setting up route
angular.module('<%= slugifiedPluralName %>').config(['$stateProvider',
	function($stateProvider) {
		// <%= humanizedPluralName %> state routing
    var access = roleManager.accessLevels;
		$stateProvider.
		state('list<%= classifiedPluralName %>', {
			url: '/<%= slugifiedPluralName %>',
			templateUrl: 'modules/<%= slugifiedPluralName %>/views/list-<%= slugifiedPluralName %>.client.view.html',
        data : {
          access : access.anon
        }
		}).
		state('create<%= classifiedSingularName %>', {
			url: '/<%= slugifiedPluralName %>/create',
			templateUrl: 'modules/<%= slugifiedPluralName %>/views/create-<%= slugifiedSingularName %>.client.view.html',
        data : {
          access : access.anon
        }
		}).
		state('view<%= classifiedSingularName %>', {
			url: '/<%= slugifiedPluralName %>/:<%= camelizedSingularName %>Id',
			templateUrl: 'modules/<%= slugifiedPluralName %>/views/view-<%= slugifiedSingularName %>.client.view.html',
        data : {
          access : access.anon
        }
		}).
		state('edit<%= classifiedSingularName %>', {
			url: '/<%= slugifiedPluralName %>/:<%= camelizedSingularName %>Id/edit',
			templateUrl: 'modules/<%= slugifiedPluralName %>/views/edit-<%= slugifiedSingularName %>.client.view.html',
        data : {
          access : access.anon
        }
		});
	}
]);
