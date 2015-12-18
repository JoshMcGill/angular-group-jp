var app = angular.module("Recipes");

app.directive("navbar", ["UserService", function (UserService) {  
    return {
        templateUrl: "nav/navbar.html",
        link: function (scope) {
            scope.$watch(function () {
                return UserService.isAuthenticated();
            }, function () {
                scope.isAuthenticated = UserService.isAuthenticated();
            });
        }
    }
}]);