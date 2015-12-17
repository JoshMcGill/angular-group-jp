var app = angular.module('Recipes');

app.controller('SignupController', ['$scope', '$location', 'UserService', function ($scope, $location, UserService) {

    $scope.errorMessage = "";

    $scope.signup = function (user) {
        console.log(user);
        if ($scope.user.password === $scope.reEnter) {
            $scope.errorMessage = "Passwords Matched!"
            
            UserService.signup(user).then(function (response){
                $location.path('/login');
            }, function(respones){
                alert('There was an error signing up, Try again!') 
            });
        } else {
            $scope.errorMessage = "Passwords do NOT match!"
        }
    }
}])