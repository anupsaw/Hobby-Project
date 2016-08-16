(function () {
    'use strict';
    angular.module('MovieApp')
        .controller('signupCtrl', function ($scope, $state, dataService, userModelData) {

            var vm = this;
            vm.page = 'user.signup';
            vm.userModelData = {};

            vm.RegisterUser = RegisterUser;

            function RegisterUser() {

                SaveDate()
                    .then(SendToLogin);
            }

            function SaveDate() {
                var res = dataService.Post(vm.userModelData);

                return res;
            }

            function SendToLogin(res) {

                $state.go('user.login');
            }



        });

})();