angular.module('twiser').controller('homeCtrl', function($scope, twitterService, $q, $rootScope) {

  twitterService.initialize();

  $rootScope.isReady = twitterService.isReady();

      // when the user clicks the connect twitter button, the popup authorization window opens
      $scope.connectButton = function() {
          twitterService.connectTwitter().then(function(result) {
              if (twitterService.isReady()) {
                $rootScope.isReady = twitterService.isReady();              }
          })
      }

            //sign out clears the OAuth cache, the user will have to reauthenticate when returning
      $scope.signOut = function() {
          twitterService.clearCache();
          $rootScope.isReady = twitterService.isReady();
      }
      $scope.isReady = twitterService.isReady();
});
