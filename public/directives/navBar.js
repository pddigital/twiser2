angular.module('twiser')
.directive('navBar', function() {
  return {
		  templateUrl: './directives/navBar.html',
      controller: function($scope, twitterService, $q, $rootScope){
        twitterService.initialize();

        $rootScope.isReady = twitterService.isReady();

        $scope.connectLink = function() {
            twitterService.connectTwitter().then(function() {
                if (twitterService.isReady()) {
                  $rootScope.isReady = twitterService.isReady();
                }
            });
        }

        $scope.signOutLink = function() {
            twitterService.clearCache();
            $rootScope.isReady = twitterService.isReady();
        }

      },
      link: function(scope, elem, attr) {
        $('#hamburgerMenu').click(function(){
          $('#navLinks').toggle();
      })}
		}

});
