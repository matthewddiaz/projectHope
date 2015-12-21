(function(){
  var app = angular.module('projectHope', ['ngRoute', 'ui.materialize']);

  app.config(['$routeProvider', function($routeProvider){

		$routeProvider//Are the specific routes that user types in the browser will inject the specifc html to index.html
			.when('/home', {
				templateUrl : 'home.html'
			})
      .when('/calendar', {
				templateUrl : 'calendar.html'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}]);

   $( document ).ready(function(){
      $(".button-collapse").sideNav();
   });
})();
