angular.module('twiser').factory('mongoService', function($http) {
    return {
      postUser: function(user) {
          return $http.post(`/twiser/api/users/`, user)
      },
      getUser: function(user) {
          return $http.get(`/twiser/api/users/` + user)
      },
      updateUser: function(id, body) {
          console.log (id, body)
          return $http.put(`/twiser/api/update/` + id, body)
      }
    }
})
