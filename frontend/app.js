var app = angular.module('Recipes', ['ngRoute', 'RecipesAuth']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'SignupController'
        })
        .when('/login', {
            templateUrl: 'pages/login.html'
        })
        .when('/signup', {
            templateUrl: 'pages/sign-up.html',
            controller: 'SignupController'
        })
})