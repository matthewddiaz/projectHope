angular.module('projectHope.navigationController', ['ngRoute'])
  .controller('NavigationController', ['$scope', '$location', function( $scope, $location){
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }]);
