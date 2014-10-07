'use strict';

//Setting up route
angular.module('<%= slugifiedModuleName %>').config(['$stateProvider',
    function($stateProvider) {
    // <%= humanizedModuleName %> state routing
    var access = roleManager.accessLevels;
    $stateProvider.
        state('<%= slugifiedName %>', {
            url: '/<%= slugifiedRoutePath %>',
            templateUrl: 'modules/<%= slugifiedModuleName %>/views/<%= slugifiedName %>.client.view.html',data : {
                access : access.anon
            }
            });
    }
]);
