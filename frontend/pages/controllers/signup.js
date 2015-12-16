var app = angular.module('Recipes');

app.controller('SignupController', ['$scope', '$location', 'UserService', function ($scope, $location, UserService) {

    $scope.errorMessage = "";

    $scope.signup = function (user) {
        if ($scope.password === $scope.reEnter) {
            $scope.errorMessage = "Passwords Matched!"
            
            UserService.login(user).then(function (response){
                $location.path('/login');
            }, function(respones){
                alert('There was an error signing up, Try again!') 
            });
        } else {
            $scope.errorMessage = "Passwords do NOT match!"
        }
    }
}])