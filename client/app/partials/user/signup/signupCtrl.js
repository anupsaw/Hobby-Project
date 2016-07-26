(function () {
    'use strict';
    angular.module('MovieApp')
        .controller('signupCtrl', ['dataService', function (dataService) {

            var vm = this;

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