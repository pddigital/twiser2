angular.module('twiser').factory('twitterService', function($q, twitter, $cookies) {

  var authorizationResult = false;
  var authUser = {};

  return {
      initialize: function() {
          //initialize OAuth.io with public key of the application
          OAuth.initialize('8BHGoV6cpxIWMDbWXHOkfbtUs2c', {cache:true});
          //try to create an authorization result when the page loads, this means a returning user won't have to click the twitter button again
          authorizationResult = OAuth.create('twitter');
      },
      isReady: function() {
          return (authorizationResult);
      },
      connectTwitter: function() {
          var deferred = $q.defer();
          OAuth.popup('twitter', {cache:true}, function(error, result) { //cache means to execute the callback if the tokens are already present
          result.get('/1.1/account/verify_credentials.json').done(function(data) {
                  $cookies.put('twiserUser', data.screen_name);
          })
              if (!error) {
                  authorizationResult = result;
                  deferred.resolve();
              } else {

              }
          });
          return deferred.promise;
      },
      clearCache: function() {
          OAuth.clearCache('twitter');
          authorizationResult = false;
      },
      getTwitterRequest: function (uri) {
          //create a deferred object using Angular's $q service
          var deferred = $q.defer();
          var promise = authorizationResult.get(uri).done(function(data) { //https://dev.twitter.com/docs/api/1.1/get/statuses/home_timeline
              //when the data is retrieved resolved the deferred object
            deferred.resolve(data)
          }).fail(function(){
            deferred.resolve();
          })
          //return the promise of the deferred object
          return deferred.promise;
      },
  }

});
