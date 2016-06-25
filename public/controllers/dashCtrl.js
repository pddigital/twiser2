angular.module('twiser').controller('dashCtrl', function($scope, twitterService, mongoService, twitter, $q, $rootScope){

  twitterService.initialize();

  var userArray = [];
  $scope.usersDataArray = [];

  $scope.getUserError = false;

  $scope.getAuthUser = function() {
        twitterService.getTwitterRequest(twitter.authRequestUrl).then(function(data) {
            if (data) {
              $scope.authData = data;
              console.log($scope.authData.screen_name);
              $scope.retrieveSaved();
            }
            else if (!data){
              console.log('Error on auth user get');
            }
    })}

  $scope.getAuthUser();

  $scope.getUserData = function() {
    if ($scope.userInput) {
      twitterService.getTwitterRequest(twitter.userRequestUrl + $scope.userInput).then(function(data) {
            if (data) {
              $scope.getUserError = false;
              data.profile_image_url = data.profile_image_url.replace("_normal", '');
              data.created_at = new Date(Date.parse(data.created_at.replace(/( \+)/, ' UTC$1')));
              $scope.usersDataArray.push(data);
              $scope.userInput = "";
            }
            else if (!data){
              $scope.getUserError = true;
            }
    })
    }
    }

$scope.pushUser = ()=> {
    if ($scope.userId) {
    let userArray = {};
    userArray.accountsFollowing = [];
    $scope.usersDataArray.forEach(function(item){
        userArray.accountsFollowing.push(item.screen_name);
    })
    mongoService.updateUser($scope.userId, userArray).then(() => {
    })
    }
    else if (!$scope.userId) {
      let userObject = {};
      userObject.user = $scope.authData.screen_name;
      userObject.accountsFollowing = [];
      $scope.usersDataArray.forEach(function(item){
          userObject.accountsFollowing.push(item.screen_name);
      })
      mongoService.postUser(userObject).then(() => {
      })
    }
  }

$scope.retrieveSaved = ()=> {
  mongoService.getUser($scope.authData.screen_name).then((result) => {
  if (result.data) {
    console.log(result.data);
    $scope.userArray2 = result.data.accountsFollowing.toString();
    $scope.userId = result.data._id;
    return $scope.getUsersOnLoad();
  }
  else {
    }
  })
}

$scope.getUsersOnLoad = function() {
          twitterService.getTwitterRequest(twitter.usersRequestUrl + $scope.userArray2).then(function(data) {
            if (data) {
              $scope.getUserError = false;
              for(var i = 0; i < data.length; i++){
                data[i].profile_image_url = data[i].profile_image_url.replace("_normal", '');
                data[i].created_at = new Date(Date.parse(data[i].created_at.replace(/( \+)/, ' UTC$1')));
              }
              $scope.usersDataArray = data;
            }
            else if (!data){
            }
          })
}


})
