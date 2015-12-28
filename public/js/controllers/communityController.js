angular.module('projectHope.communityController', ['ngRoute', 'ui.materialize'])
  .controller('CommunityController', ['$http', '$scope', function($http, $scope){
    $scope.acmPrinciples = [
      {
          "title" : "Experience God",
          "description" : "Description 1 goes here",
          "videoURL" : "/videos/video1.mp4"
      },
      {
          "title" : "Sharing Love",
          "description" : "Description 2 goes here",
          "videoURL" : "/videos/video1.mp4"
      },
      {
          "title" : "Connecting Lives",
          "description" : "Description 3 goes here",
          "videoURL" : "/videos/video1.mp4"
      },
      {
          "title" : "Declaring Truth",
          "description" : "Description 4 goes here",
          "videoURL" : "/videos/video1.mp4"
      }
    ]

  }]);
