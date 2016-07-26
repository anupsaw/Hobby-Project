(function () {
'use strict';

    angular.module('MovieApp')
        .controller('userCtrl', ['$state',function ($state) {

            var vm = this;
            $state.go('user.login');

        }]);

})();