$stateProvider.
		state('<%= slugifiedName %>', {
		url: '/<%= slugifiedRoutePath %>',
		templateUrl: 'modules/<%= slugifiedModuleName %>/views/<%= slugifiedName %>.client.view.html',
    data : {
      access : access.anon
    }
		}).
