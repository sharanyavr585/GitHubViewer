(function(){
  
  var repos = function($http){
    
    var getDetails = function(username,reponame){
      console.log(username);
      console.log(reponame);
      return $http.get("https://api.github.com/repos/"+username+"/"+reponame)
              .then(function(response){
                  return response.data;
              });
    };
    
    var getCollaborators = function(username,reponame){
      return $http.get("https://api.github.com/repos/"+username+"/"+reponame+"/collaborators")
              .then(function(response){
                  return response.data;
              });
    };
    
    return {
      getDetails:getDetails,
      getCollaborators:getCollaborators
    };
    
    
  };
  var module =  angular.module("githubViewer");
  module.factory("repos", repos);
  
  
  
}());