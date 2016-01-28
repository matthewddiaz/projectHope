(function(){
  var app = angular.module('projectHope', ['ngRoute', 'ui.materialize',
                          'projectHope.contactUSModalController',
                          'projectHope.communityController',
                          'projectHope.eventsController',
                          'projectHope.navigationController']);

  app.config(['$routeProvider', function($routeProvider){
		$routeProvider//Are the specific routes that user types in the browser will inject the specifc html to index.html
      .when('/blog',{
        templateUrl : 'blog.html'
      })
      .when('/community', {
        templateUrl : 'community.html'
      })
      .when('#experiencingGod', {
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
      closeOnClick: true, // Closes side-nav on <a> clicks
      menuWidth: 300 // Default is 240
    });

   shrinkNavBar();
})();
