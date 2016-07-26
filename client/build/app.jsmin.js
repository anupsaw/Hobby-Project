var app = angular.module('car', ['ui.router', 'ngRoute'])
;app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'view/home.html',
            controller: 'homeCtrl'

        })
        .state('login', {
            url: '/login',
            templateUrl: 'view/userLogin.html',
            controller: 'userLoginCtrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'view/userRegister.html',
            controller: 'userLoginCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'view/about.html'
        })

}]);
;app.controller('homeCtrl', ['$scope', function($scope) {

    $scope.headerName = 'This is About Screen'

}])
;app.expandcarCotrl = function($scope) {

    console.log($scope.log);
    $scope.FromCtrlA = 'Hi I am from CtrlA'

}
;app.controller('carCtrl', ['$scope', function($scope) {
    console.log('anup  kumar saw');
    $scope.log = 'From CarCtrl1';
    var person = (function() {

        return {
            Name: function() {

                console.log('from a singleton function')
            },
            Age: 20,
            Address: 'Indirapuram'

        }
    })();

    console.log(person)

    app.expandcarCotrl($scope);

    console.log($scope.FromCtrlA);

    //This is End
}]);
;app.controller('homeCtrl', ['$scope', function($scope) {

    $scope.headerName = 'This is Home Screen'

}])
;app.controller('userLoginCtrl', ['$scope', function($scope) {

    $scope.headerName = 'This is user Login screen'

}])
;app.controller('userRegisterCtrl', ['$scope', function($scope) {

    $scope.headerName = 'This is user registration screen'

}])
