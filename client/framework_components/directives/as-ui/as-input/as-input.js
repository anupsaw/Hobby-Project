angular.module('as-ui')
    .directive('asInput', function () {

        return {
            templateUrl: 'framework_components/directives/as-ui/as-input/as-input.tpl.html',
            restrict: 'E',
            controller: 'asInputCtrl',
            controllerAs: 'asInputCtrl',
            scope: {
                field: '=',
                model: '='
            },
            link: function (scope, element, attr, ctrl) {

                var test = 0;
                console.log('link');
                // $(element).on('click', 'a.as-edit', function () {
                //     ctrl.allowEditing();
                // });
                // $(element).on('click', 'a.as-undo', function () {
                //     ctrl.allowEditing();
                // });
            }
        }
    })
    .controller('asInputCtrl', function ($scope) {

        var vm = this;
        vm.allowEditing = allowEditing;
        console.log('controller');

        function allowEditing() {
            vm.isEdit = vm.isEdit ? false : true;
        }
    })