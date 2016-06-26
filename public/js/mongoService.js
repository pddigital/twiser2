angular.module('twiser').factory('mongoService', function($http) {
    return {
      postUser: (user)=> {
          return $http.post(`/twiser/api/users/`, user)
      },
      getUser: (user)=> {
          return $http.get(`/twiser/api/users/` + user)
      },
      updateUser: (id, body)=> {
          console.log (id, body)
          return $http.put(`/twiser/api/update/` + id, body)
      }
    }
})
