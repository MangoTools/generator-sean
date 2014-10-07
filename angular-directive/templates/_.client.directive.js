'use strict';

angular.module('<%= slugifiedModuleName %>').directive('<%= camelizedName %>', [
    function() {
        return {
            template: '<div></div>',
            restrict: 'AE',
            link: function postLink(scope, element, attrs) {
                // <%= humanizedName %> directive logic
                // ...

                element.text('this is the <%= camelizedName %> directive');
            },
            controller: function ($scope) {

            }
        }
    }
]);
