angular.module('twiser')
.directive('userCard', function() {
  return {
		  templateUrl: './directives/userCard.html',
      controller: function($scope, twitterService, $q, $rootScope){


      $scope.deleteCard = function (user) {
            var index = $scope.usersDataArray.indexOf(user);
            if (index != -1) {
                $scope.usersDataArray.splice(index, 1);
            }
            console.log($scope.usersDataArray);
        }

      },
      link: function(scope, elem, attr) {

      }
    }
});
