(function () {
'use strict';

    function homeRouting($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/partials/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'homeCtrl'

            });
        // .state('login', {
        //     url: '/login',
        //     templateUrl: 'app/partials/login/login.html',
        //     controller: 'loginCtrl',
        //     controllerAs: 'loginCtrl'

        // })
        // .state('signup', {
        //     url: '/signup',
        //     templateUrl: 'app/partials/signup/signup.html',
        //     controller: 'signupCtrl',
        //     controllerAs: 'signupCtrl'

        // })
    }


    angular.module('MovieApp')
        .config(['$stateProvider', '$urlRouterProvider', homeRouting]);

})();