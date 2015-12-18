var app = angular.module('Recipes');

app.controller('HomeController', ['$location', '$scope', '$http', 'UserService', function ($location, $scope, $http, UserService) {
    
    $scope.name = null;

    
    $scope.logout = UserService.logout;
    
}])