angular.module('as-ui')
    .directive('asInput', function () {

        return {
            templateUrl: 'framework_components/directives/as-ui/as-input/as-input.tpl.html',
            restrict: 'E',
            replace: true,
            controller: 'asInputCtrl',
            controllerAs: 'asInputCtrl',
            scope:{
                field:'=',
                model:'='
            },
            link: function (scope, ele, attr) {

                var test = 0;
                console.log('link');
            }
        }
    })
    .controller('asInputCtrl', function ($scope) {

        var vm = this;
        console.log('controller');
    })