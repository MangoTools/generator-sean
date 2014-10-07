'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {

        //Watch user login
        $scope.user = User.get();
        $scope.isAuthenticated = Authentication.isAuthenticated();

        $rootScope.$on('Auth',function(){
            $scope.user = User.get();
            $scope.isAuthenticated = Authentication.isAuthenticated();
        });

		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);
