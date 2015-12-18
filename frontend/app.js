var app = angular.module('Recipes', ['ngRoute', 'RecipesAuth']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'pages/sign-up.html',
            controller: 'SignupController'
        })
        .when('/create', {
            templateUrl: 'pages/createRecipe.html',
            controller: 'CreateRecipeController'
        })
})
