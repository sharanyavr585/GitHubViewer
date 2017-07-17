// Code goes here
(function(){
  
var app = angular.module("githubViewer");
var MainController = function($scope,$interval,$location){
  
  var decrementCountdown=function(){
    $scope.countdown = $scope.countdown -1;
    if($scope.countdown<1){
      $scope.Search($scope.username);
    };
  };
  
  var countdown = null;
  var setCountdown = function(){
    countdown = $interval(decrementCountdown,1000,$scope.countdown);
  };
  
  $scope.Search = function(username){
      if(countdown){
        $interval.cancel(countdown);
        $scope.countdown = null;
      };
      $location.path("/user/"+username);
  };

  
  $scope.username="angular";     
  $scope.countdown = 5;
  
  setCountdown();
};

app.controller("MainController", MainController);

  
}());