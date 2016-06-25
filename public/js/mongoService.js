angular.module('twiser').factory('mongoService', function($http) {
    return {
      postUser: (user)=> {
          return $http.post(`/api/users/`, user)
      },
      getUser: (user)=> {
          return $http.get(`/api/users/` + user)
      },
      updateUser: (id, body)=> {
          console.log (id, body)
          return $http.put(`/api/update/` + id, body)
      }
    }
})
