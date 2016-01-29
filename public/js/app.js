(function(){
  var app = angular.module('projectHope', ['ngRoute', 'ui.materialize',
                          'projectHope.contactUSModalController',
                          'projectHope.communityController',
                          'projectHope.eventsController',
                          'projectHope.navigationController']);

  app.config(['$routeProvider', function($routeProvider){
		$routeProvider//Are the specific routes that user types in the browser, injects the specifc html to index.html
      .when('/blog',{
        templateUrl : 'blog.html',
        resolve: {
          topOfPage : scrollTop
        }
      })
      .when('/community', {
        templateUrl : 'community.html',
        resolve: {
          topOfPage : scrollTop
        }
      })
      .when('#experiencingGod', {
        templateUrl : 'community.html',
        resolve: {
          topOfPage : scrollTop
        }
      })
      .when('/events', {
        templateUrl : 'events.html',
        resolve: {
          topOfPage : scrollTop
        }
      })
      .when('/home', {
				templateUrl : 'home.html',
        resolve: {
          topOfPage : scrollTop
        }
			})
			.otherwise({
				redirectTo: '/home',
        resolve: {
          topOfPage : scrollTop
        }
			});
	}]);

  /*    NOTE: The scrollTop solves the following scenario
   *    When pages change and user has scrolled down on that
   *    page. Now clicking on another page in the navigation
   *    bar will start the page at the same height where the user
   *    was on the previous page.
   *
   *    This function scrolls 10000px upward at the start of every
   *    page.
   */
  var scrollTop = function(){
    $('html, body').animate({ scrollTop: -10000 }, 100);
  }

  /*  NOTE: For Mobile version only
   *  Increased the width of the navigation side bar.
   */
   $('.button-collapse').sideNav({
      closeOnClick: true, // Closes side-nav on <a> clicks
      menuWidth: 300 // Default is 240
    });

   shrinkNavBar();
})();
