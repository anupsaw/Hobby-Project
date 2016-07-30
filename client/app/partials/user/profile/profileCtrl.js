(function () {
    'use strict';
    angular.module('MovieApp')
        .controller('signupCtrl', ['dataService', 'userModelData', function (dataService, userModelData) {

            var vm = this;
            vm.page = 'user.signup';
            vm.userModelData = {};

            vm.RegisterUser = RegisterUser;

            function RegisterUser() {

                dataService.Post(vm.userModelData);
                // dataService.Put('/user', vm.userModelData)
                //dataService.Delete('/user', vm.userModelData)
                // dataService.Get('/user', vm.userModelData)

            }

        }]);

})();