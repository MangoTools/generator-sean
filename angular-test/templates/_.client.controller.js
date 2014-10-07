'use strict';

angular.module('<%= slugifiedModuleName %>').controller('<%= classifiedControllerName %>Controller', ['$scope',
	function($scope) {

        //Watch user login
        $scope.user = User.get();
        $scope.isAuthenticated = Authentication.isAuthenticated();

        $rootScope.$on('Auth',function(){
            $scope.user = User.get();
            $scope.isAuthenticated = Authentication.isAuthenticated();
        });

		// <%= humanizedControllerName %> controller logic
		// ...
	}
]);
