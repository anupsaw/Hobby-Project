(function () {
    'use strict';

    angular.module('MovieApp')
        .controller('adminCtrl', function ($scope, $state) {
            var vm = this;
            vm.nextPage = null;
            $state.go('admin.home');
            $scope.$on('adminPageChanged', function (event, data) {
                vm.nextPage = data;
            });

            vm.ShowToast = function () {
                Materialize.toast('soon we will guid you. Thanks for showing interest.', 4000);
            };
        });


})();