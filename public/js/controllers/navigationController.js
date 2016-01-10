angular.module('projectHope.navigationController', ['ngRoute', 'ui.materialize'])
  .controller('NavigationController', ['navBarService', '$scope', function(navBarService, $scope){
      $scope.service = navBarService;
      $scope.isNavFullSize = 0;

  //   $scope.$watch('service.getData()', function(newVal) {
  //   console.log("New Data", newVal);
  //   $scope.isNavFullSize = newVal;
  // });

  }]);
