'use strict';

// <%= humanizedPluralName %> controller
angular.module('<%= slugifiedPluralName %>').controller('<%= classifiedPluralName %>Controller', ['$scope', '$stateParams', '$location','Message','User','<%= classifiedPluralName %>',
	function($scope, $stateParams, $location,Message,User, <%= classifiedPluralName %> ) {

  //get authentified user.
  $scope.user = User.get()

		// Create new <%= humanizedSingularName %>
		$scope.create = function() {
			// Create new <%= humanizedSingularName %> object
			var <%= camelizedSingularName %> = new <%= classifiedPluralName %> ({
				name: this.name
			});

			// Redirect after save
			<%= camelizedSingularName %>.$save(function(response) {
        Message.success('<%= classifiedPluralName %>','<%= classifiedSingularName %> successfully created');
				$location.path('<%= slugifiedPluralName %>/' + response.id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
        Message.error('<%= classifiedPluralName %>',errorResponse.data.message);
			});
		};

		// Remove existing <%= humanizedSingularName %>
		$scope.remove = function( <%= camelizedSingularName %> ) {
			if ( <%= camelizedSingularName %> ) { <%= camelizedSingularName %>.$remove();
				for (var i in $scope.<%= camelizedPluralName %> ) {
					if ($scope.<%= camelizedPluralName %> [i] === <%= camelizedSingularName %> ) {
						$scope.<%= camelizedPluralName %>.splice(i, 1);
					}
				}
			} else {
				$scope.<%= camelizedSingularName %>.$remove(function() {
        Message.success('<%= classifiedPluralName %>','<%= classifiedSingularName %> successfully removed');
					$location.path('<%= slugifiedPluralName %>');
				});
			}
		};

		// Update existing <%= humanizedSingularName %>
		$scope.update = function() {
			var <%= camelizedSingularName %> = $scope.<%= camelizedSingularName %> ;

			<%= camelizedSingularName %>.$update(function() {
        Message.success('<%= classifiedPluralName %>','<%= classifiedSingularName %> successfully updated');
				$location.path('<%= slugifiedPluralName %>/' + <%= camelizedSingularName %>.id);
			}, function(errorResponse) {
        Message.error('<%= classifiedPluralName %>',errorResponse.data.message);
			});
		};

		// Find a list of <%= humanizedPluralName %>
		$scope.find = function() {
			$scope.<%= camelizedPluralName %> = <%= classifiedPluralName %>.query();
		};

		// Find existing <%= humanizedSingularName %>
		$scope.findOne = function() {
			$scope.<%= camelizedSingularName %> = <%= classifiedPluralName %>.get({
				<%= camelizedSingularName %>Id: $stateParams.<%= camelizedSingularName %>Id
			});
		};
	}
]);
