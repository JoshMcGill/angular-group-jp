var app = angular.module('Recipes');

app.service('RecipeService', ['$http', function ($http) {
    var baseUrl = "http://localhost:5000/api/recipe/"

    //following
    this.following = function () {
        return $http.get(baseUrl + 'following').then(function (response) {
            return response;
        })
    };
    
    this.myRecipes = function(){
        return $http.get(baseUrl).then(function(response){
            return response;   
        })   
    }
    
    this.addRecipe = function(recipe){
        return $http.post(baseUrl, recipe).then(function(response){
            return response;   
        })   
    }
}])