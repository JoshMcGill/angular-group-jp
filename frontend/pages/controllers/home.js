var app = angular.module('Recipes');

app.controller('HomeController', ['$location', '$scope', '$http', 'UserService', 'RecipeService', function ($location, $scope, $http, UserService, RecipeService) {

    $scope.name = null;

    $http.get('http://localhost:5000/api/user').then(function (response) {
        UserService.userName = response.data.name;
        $scope.name = response.data.name;
    });

    RecipeService.following().then(function (response) {
        console.log(response);
        $scope.following = response.data;
    })

    RecipeService.myRecipes().then(function (response) {
        $scope.myRecipes = response.data;
        console.log($scope.myRecipes);

    })

    $scope.logout = UserService.logout;

}])