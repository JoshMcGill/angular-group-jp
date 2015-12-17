var app = angular.module('RecipesAuth', []);

app.service('TokenService', [function () {
    var userToken = 'token';

    //Save Token
    this.saveToken = function (token) {
            localStorage[userToken] = token;
        }
        //Get Token
    this.getToken = function () {
            return localStorage[userToken];
        }
        //Remove Token
    this.removeToken = function () {
        localStorage.removeItem(userToken);
    }
}])

app.service('UserService', ['$http', 'TokenService', function ($http, TokenService) {
    var baseUrl = "http://localhost:5000/auth"

    // Signup
    this.signup = function (user) {
        return $http.post(baseUrl + '/signup', user);

    }

    // Login
    this.login = function (user) {
            return $http.post(baseUrl + '/login', user).then(function (response) {
                TokenService.saveToken(response.data.token);
                return response;
            })
        }
        // Logout
    this.logout = function () {
        TokenService.removeToken();
    }
    
    this.userName = null;
}])

app.factory("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    var interceptor = {
        request: function (config) {
            var token = TokenService.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token;
            }

            return config;
        },
        responseError: function (response) {
            if (response.status === 401) {
                TokenService.removeToken();
                $location.path("/login");
            }
            $q.reject(response);
        }
    }

    return interceptor;
}]);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
}]);