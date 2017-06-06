(function () {
    'use strict';

    function homeRouting($stateProvider, $urlRouterProvider) {

        // $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'app/partials/admin/admin.html',
                controller: 'adminCtrl',
                controllerAs: 'adminCtrl'
            })
            .state('admin.home', {
                url: '/home',
                templateUrl: 'app/partials/admin/home/home.html',
                controller: 'adhomeCtrl',
                controllerAs: 'adhomeCtrl'
            })
            .state('admin.addschema', {
                url: '/addschema',
                templateUrl: 'app/partials/admin/addschema/addschema.html',
                controller: 'addschemaCtrl',
                controllerAs: 'addschemaCtrl'
            })
            .state('admin.editschema', {
                url: '/editschema',
                templateUrl: 'app/partials/admin/editschema/editschema.html',
                controller: 'editschemaCtrl',
                controllerAs: 'editschemaCtrl'
            });
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