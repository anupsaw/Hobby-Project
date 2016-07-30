(function () {
    'use strict';

    angular.module('MovieApp')
        .controller('resetpasswordCtrl', ['dataService', function (dataService) {

            var vm = this;

            vm.Authenticate = Authenticate;


            function Authenticate() {

                dataService.Post(vm.userModelData).then(LoginUser);
            }


            function LoginUser(data) {

                if (data.data === true) {
                    alert('login Successful');
                } else {
                    alert(data.data);
                }

            }

        }]);

})();