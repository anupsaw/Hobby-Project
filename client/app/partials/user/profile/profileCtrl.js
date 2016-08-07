(function () {
    'use strict';
    angular.module('MovieApp')
        .controller('profileCtrl', ['$scope', 'dataService', 'UserDate', function ($scope, dataService, UserDate) {

            var vm = this;
            vm.isShowPasswordPanel = false;
            vm.userModelData = UserDate;

            vm.updatePassword = updatePassword;
            vm.showPasswordPanel = showPasswordPanel;
            vm.UpdateProfile = UpdateProfile;
            // vm.edit = editField;

            function activate() {
                angular.element(document).ready(function () {
                    window.Materialize.updateTextFields();
                });
            }
            function updatePassword() {
                vm.showPasswordPanel();
            }

            function showPasswordPanel() {
                vm.isShowPasswordPanel = !vm.isShowPasswordPanel;
            }

            function UpdateProfile() {
                dataService.Put(vm.userModelData);
            }

            activate();
        }]);

})();