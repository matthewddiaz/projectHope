angular.module('projectHope.communityController', ['ngRoute', 'ui.materialize'])
  .controller('CommunityController', ['$http', '$scope', '$document', function($http, $scope, $document){

    $scope.acmPrinciples = [
      {
          "title" : "Experiencing God",
          "description" : "We experience God through a deep personal relationship that can be attained through studying God’s word and prayer. Seeking God with prayer and supplication allows us to be able to taste and see His faithfulness, goodness, and love. Matthew 6:33 says: \"Seek ye first the kingdom of God and his righteousness and all these things will be added unto you.\" Some special times when we experience God are at our monthly campus churches as well as our weekly Mosaic worship services on Friday nights.",
          "videoURL" : "/videos/craveUF.mp4",
          "id" : "experiencingGod"
      },
      {
          "title" : "Sharing Love",
          "description" : "In Philippians 2:3 it states, \“Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves.\" After experiencing God’s love, we can’t help but sharing it with others. We share love by serving our UF and Gainesville community in being a friend to our neighbors, our selfless actions and by putting those in need above ourselves. Glimpses of how we share our love with our fellow men are our \“Stress­Relief­Encouraging snacks\” for students and our street clean­ups at N.E. 8th Avenue. We also host outreach programs where we encourage the citizens which include those who are homeless at Grace Marketplace, children in a mobile home called \"Lamplighters\", residents of nursing homes, and patients at the hospital." ,
          "videoURL" : "/videos/acmPrayerWalk.mp4",
          "id" : "sharingLove"
      },
      {
          "title" : "Connecting Lives",
          "description" : "Community is a very important value for ACM. We realize that we cannot do things alone. Our goal is to thrive together and help each other in our walk with Christ. We do this by our bi-monthly campus churches, and especially with small groups almost everyday of the week. In this way, we are able to form deeper and lasting relationships with each other which helps us on the path to heaven and also in reflecting Christ’s love. We also connect with other religious organizations on campus since we are all children of God and share similar goals here at UF.",
          "videoURL" : "/videos/craveUF.mp4",
          "id" : "conntectingLives"
      },
      {
          "title" : "Declaring Truth",
          "description" : "Jesus said, “Go therefore and make disciples of all nations…” By sharing the gospel of truth and love, we put in motion the great commission given by our Lord. We proclaim the truth about His soon second coming, His love and His plan of salvation for our lives to all who has a listening ear. If we have such a great hope, why not share it with others? You can “hear the voice that cries in the wilderness” when ACM tables at Turlington or hosts bible studies, evangelistic meetings, and pretty much all events.",
          "videoURL" : "/videos/craveIdentity.mp4",
          "id" : "declaringTruth"
      }
    ]

    setTimeout(function(){
       $('.scrollspy').scrollSpy();
     }, 100);




  }]);
