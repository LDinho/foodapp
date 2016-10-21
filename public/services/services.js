angular.module('foodServices', [])

.factory('Pictures', ['$http', function($http) {
  
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/places'
    });
  }

  var addOne = function(picture) {
    return $http({
      method: 'POST',
      url: '/places',
      data: picture
    });
  }

  return {
    getAll: getAll,
    addOne: addOne
  }

}]);