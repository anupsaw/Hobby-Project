angular.module('as-ui')
    .directive('asSelect', function ($timeout) {

        return {
            templateUrl: 'framework_components/directives/as-ui/as-select/as-select.tpl.html',
            restrict: 'E',
            replace: true,
            controller: 'asSelectCtrl',
            controllerAs: 'asSelectCtrl',
            scope: {
                field: '=',
                model: '='
            },
            link: function (scope, element, attr) {
                
                // function activateSelect() {
                //     //$(element).material_select('destroy');
                //     $timeout(function () {
                //         var select = element.find('select');
                //         var options = select.find('option');
                //         var selectOptions = scope.field.select;
                //         if (selectOptions === undefined) {
                //             $(select).material_select();
                //         } else if (options.length > 1) {
                //             $(select).material_select();
                //         } else {
                //             activateSelect();
                //         }
                //     });

                // }

                angular.element(element).ready(function () {
                    $('select').material_select();
                });
                //activateSelect();

            }
        }
    })
    .controller('asSelectCtrl', function ($scope) {

        var vm = this;
        console.log('controller');
    })