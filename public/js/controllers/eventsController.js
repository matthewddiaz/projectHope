angular.module('projectHope.eventsController', ['ngRoute', 'ui.materialize'])
  .controller('EventsController', ['$scope', function($scope){
    $scope.acmWeeklyEvents = [
      {
          "day" : "Sunday",
          "title" : "Men\'s Growth Group",
          "time" : "5:30",
          "location" : "Greenwich Green Apts."
      },
      {
          "day" : "Tuesday",
          "title" : "ACM Fitness",
          "time" : "6:40",
          "location" : "Stadium (Bull Gator)"
      },
      {
          "day" : "Wednesday",
          "title" : "Women\'s Growth Group",
          "time" : "7:00",
          "location" : "Towne Parc Apts."
      },
      {
          "day" : "Thursday",
          "title" : "Bible Study",
          "time" : "7:00",
          "location" : "Reitz Union Food Court"
      },
      {
          "day" : "Friday",
          "title" : "Mosaic: Worship from Scratch",
          "time" : "7:30",
          "location" : "New Physic Building"
      }
    ]

  }]);
