'use strict';

//<%= humanizedPluralName %> service used to communicate <%= humanizedPluralName %> REST endpoints
angular.module('<%= slugifiedPluralName %>').factory('<%= classifiedPluralName %>', ['$resource',
	function($resource) {
		return $resource('api/<%= slugifiedPluralName %>/:<%= camelizedSingularName %>Id', { <%= camelizedSingularName %>Id: '@id'
		}, {
			  update: {method: 'PUT'}
		});
	}
]);
