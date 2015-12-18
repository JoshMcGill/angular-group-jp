var app = angular.module('Recipes');

app.controller('CreateRecipeController', ['$scope', '$location', 'RecipeService', function($scope, $location, RecipeService){

  $scope.recipe = {};
  $scope.createRecipe = function(){
    RecipeService.addRecipe($scope.recipe)
      .then(function(response) {
        $location.path('/');
      });
  };
}]);
