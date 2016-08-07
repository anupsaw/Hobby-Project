(function () {
    'use strict';

    angular.module('MovieApp')
        .controller('loginCtrl', ['$state', 'dataService', function ($state, dataService) {

            var vm = this;

            vm.Authenticate = Authenticate;


            function Authenticate() {

                dataService.Post(vm.userModelData).then(LoginUser);
            }


            function LoginUser(data) {

                if (data) {
                    $state.go('user.profile', { id: data._id });
                } else {
                    alert(data.data);
                }

            }

        }]);

})();