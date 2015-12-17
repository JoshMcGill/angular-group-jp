var app = angular.module('Recipes');

app.controller('HomeController', ['$location', '$scope', 'UserService', function($location, $scope, UserService){
    console.log(UserService.userName)
    $scope.name = UserService.userName;
    
}])