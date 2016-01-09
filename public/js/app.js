(function(){
  var app = angular.module('projectHope', ['ngRoute', 'ui.materialize',
                          'projectHope.communityController',
                          'projectHope.navigationController']);

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

   $( document ).ready(function(){
      $(".button-collapse").sideNav();
   });

   app.service('navBarService', ['$rootScope', function($rootScope){
      // var ser = this;
    $rootScope.fullSize = true;
     $(document).ready(function(){
       $(document).scroll(function(){
         var scrollDistance = $(this).scrollTop();
         if(scrollDistance > 76){
           $rootScope.$apply();
           $rootScope.fullSize = false;
           $('#acm-nav').addClass('shrunk-size-nav');
           $('#acm-nav').removeClass('full-size-nav');
           $('.brand-logo').addClass('center');
         }else{
           $rootScope.$apply();
           $rootScope.fullSize = true;
           $('#acm-nav').removeClass('shrunk-size-nav');
           $('#acm-nav').addClass('full-size-nav');
           $('.brand-logo').removeClass('center');
         }
       });
     });
     this.getData = function() { return $rootScope.fullSize; };
   }]);

})();
