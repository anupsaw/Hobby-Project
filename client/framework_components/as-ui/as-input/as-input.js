angular.module('as-ui')
    .directive('asInput', function () {

        return {
            templateUrl: 'as-ui/as-input/as-input.tpl.html',
            restrict: 'E',
            controller: 'asInputCtrl',
            controllerAs: 'asInputCtrl',
            scope: {
                field: '=',
                model: '=',
                size:'='
            },
            link: function (scope, element, attr, ctrl) {

                var test = 0;
                console.log('link');
            }
        }
    })
    .controller('asInputCtrl', function ($scope) {

        var vm = this;


       
    })