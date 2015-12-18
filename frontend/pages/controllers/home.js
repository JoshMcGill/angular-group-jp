var app = angular.module('Recipes');

app.controller('HomeController', ['$location', '$scope', '$http', 'UserService', function ($location, $scope, $http, UserService) {
    
    $scope.name = null;

    $http.get('http://localhost:5000/api/user').then(function (response) {
        UserService.userName = response.data.name;
        $scope.name = response.data.name;
    });
    
    $scope.logout = UserService.logout;
    
}])