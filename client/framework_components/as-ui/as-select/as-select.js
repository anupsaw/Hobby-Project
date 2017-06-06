angular.module('as-ui')
    .directive('asSelect', function ($timeout) {

        return {
            templateUrl: 'as-ui/as-select/as-select.tpl.html',
            restrict: 'E',
            replace: true,
            controller: 'asSelectCtrl',
            controllerAs: 'asSelectCtrl',
            scope: {
                field: '=',
                model: '=',
                size:'='
            },
            link: function (scope, element, attr) {

                var select;

                function activateSelect() {
                    angular.element(element).ready(function () {
                        
                        select = element.find('select');

                        $(select).on('change', function (event) {
                            scope.model[scope.field.name] = select.val();
                        });

                        $(select).material_select();
                    });
                }

                activateSelect();

            }
        }
    })
    .controller('asSelectCtrl', function ($scope) {

        var vm = this;
        console.log('controller');
    })