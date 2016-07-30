(function () {
    'use strict';

    function userRuoting($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

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
            .state('user.profile', {
                url: '/profile',
                templateUrl: 'app/partials/user/profile/profile.html',
                controller: 'profileCtrl',
                controllerAs: 'profileCtrl'
            })
            .state('user.signup', {
                url: '/signup',
                templateUrl: 'app/partials/user/signup/signup.html',
                controller: 'signupCtrl',
                controllerAs: 'signupCtrl',
                resolve: {
                    userModelData: function (dataService) {
                        return dataService.Get(null,'/user/signup').then(function (res) {
                            return res;
                        });
                    }

                }
            })
            .state('user.resetpassword', {
                url: '/resetpassword',
                templateUrl: 'app/partials/user/resetpassword/resetpassword.html',
                controller: 'resetpasswordCtrl',
                controllerAs: 'resetpasswordCtrl'
            })
            .state('user.securityquestions', {
                url: '/securityquestions',
                templateUrl: 'app/partials/user/securityquestions/securityquestions.html',
                controller: 'securityquestionsCtrl',
                controllerAs: 'securityquestionsCtrl'
            });
    }

    angular.module('MovieApp')
        .config(['$stateProvider', '$urlRouterProvider', userRuoting]);
})();