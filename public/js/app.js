(function(){
  var app = angular.module('projectHope', ['ngRoute', 'ui.materialize',
                          'projectHope.communityController',
                          'projectHope.eventsController']);

  app.config(['$routeProvider', function($routeProvider){
		$routeProvider//Are the specific routes that user types in the browser will inject the specifc html to index.html
      .when('/community', {
        templateUrl : 'community.html'
      })
      .when('/events', {
        templateUrl : 'events.html'
      })
      .when('/home', {
				templateUrl : 'home.html'
			})
			.otherwise({
				redirectTo: '/home'
			});
	}]);


   $('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks
    });


   shrinkNavBar();
})();
