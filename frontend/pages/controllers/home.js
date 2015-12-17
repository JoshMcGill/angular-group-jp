var app = angular.module('Recipes');

app.controller('HomeController', ['$location', '$scope', 'UserService', function($location, $scope, UserService){
    console.log(UserService.currentUser)
    $scope.name = UserService.currentUser;
    
}])