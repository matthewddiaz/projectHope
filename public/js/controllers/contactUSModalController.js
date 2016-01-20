angular.module('projectHope.contactUSModalController', ['ngRoute'])
  .controller('ContactUSModalController', ['$scope', function( $scope ){
    $scope.formProperties = {
      vistorName: "",
      vistorEmail: "",
      subject: "",
      message: ""
    }

    $scope.sendEmail = function(){
      console.log("All fields are field out correctly");
      console.log("The name is: " + $scope.formProperties.vistorName);
      console.log("The email is: " + $scope.formProperties.vistorEmail);
      console.log("The subject is: " + $scope.formProperties.subject);
      console.log("The message is: " + $scope.formProperties.message);
    }
  }]);
