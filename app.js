(function(){
  
  var app = angular.module("githubViewer",["ngRoute"]);
  
  app.config(function($routeProvider){
    $routeProvider
        .when("/main",{
            templateUrl: "main.html",
            controller: "MainController"
        })
        .when("/user/:username",{
            templateUrl : "user.html",
            controller: "userDetailsController"
        })
        .when("/repo/:username/:reponame",{
          templateUrl : "repo.html",
          controller: "repositoryController"
        })
        .otherwise({redirectTo:"/main"});
    
  });
  
  
}());