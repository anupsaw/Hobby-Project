(function () {
    'use strict';

    angular.module('MovieApp')
        .controller('adhomeCtrl', function ($state,$scope,$rootScope) {
            var vm = this;

            vm.go = function (state, title) {
                $state.go(state);
                $rootScope.$broadcast('adminPageChanged',title);
            };

            vm.ShowToast = function () {
                Materialize.toast('soon we will guid you. Thanks for showing interest.', 4000);
            };
        });


})();