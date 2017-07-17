(function() {

  var app = angular.module("githubViewer");
  var repositoryController = function($scope, repos, $routeParams) {

    var onRepoComplete = function(data) {
      $scope.repository = data;
     // repos.getCollaborators($scope.username, $scope.reponame).then(onCollab, onError);
    };

    var onCollab = function(data) {
      $scope.collaborator = data;
    }
    var onError = function(reason) {
      $scope.error = "Could not fetch the details";
    };


    $scope.username = $routeParams.username
    console.log($scope.username);
    $scope.reponame = $routeParams.reponame
    console.log($scope.reponame);
    repos.getDetails($scope.username, $scope.reponame).then(onRepoComplete, onError);


  };

  app.controller("repositoryController", repositoryController);


}());