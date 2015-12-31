angular.module('projectHope.communityController', ['ngRoute', 'ui.materialize'])
  .controller('CommunityController', ['$http', '$scope', function($http, $scope){
    $scope.acmPrinciples = [


      {
          "title" : "Experiencing God",
          "description" : "I believe each of these values reflects what we aim to accomplish for ourselves and for others. That said, experiencing God means we seek to feel God's presence amongst us and within our individual daily lives and assist others to feel his presence as well. ",
          "videoURL" : "/videos/video1.mp4"
      },
      {
          "title" : "Sharing Love",
          "description" : "Sharing love means that we genuinely for one another and display acts of affection towards one another so that we can all feel the joy that comes from being loved. ",
          "videoURL" : "/videos/video1.mp4"
      },
      {
          "title" : "Connecting Lives",
          "description" : "Connecting lives means we come here maybe without knowing anyone or with only a few acquaintances but we gain new friends and make connections that can change our lives.",
          "videoURL" : "/videos/video1.mp4"
      },
      {
          "title" : "Declaring Truth",
          "description" : "Declaring truth means we share the adventist truths and the love of jesus with all whom we interact.",
          "videoURL" : "/videos/video1.mp4"
      }
    ]

  }]);
