(function () {
'use strict';

    function userRuoting($stateProvider, $urlRouterProvider) {

        //$urlRouterProvider.otherwise('/user');

        $stateProvider
            .state('user', {
                url: '/user',
                templateUrl: 'app/partials/user/user.html',
                controller: 'userCtrl',
                controllerAs: 'userCtrl'
            })
            .state('user.login', {
                url: '/login',
                templateUrl: 'app/partials/user/login/login.html',
                controller: 'loginCtrl',
                controllerAs: 'loginCtrl'
            })
            .state('user.signup', {
                url: '/signup',
                templateUrl: 'app/partials/user/signup/signup.html',
                controller: 'signupCtrl',
                controllerAs: 'signupCtrl'

            });
    }

    angular.module('MovieApp')
        .config(['$stateProvider', '$urlRouterProvider', userRuoting]);
})();