(function () {
    'use strict';

    angular.module('as-common')
        .directive('asCards', function ($parse, $compile, dataService) {
            return {
                templateUrl: 'as-common/as-cards/as-cards.tpl.html',
                restrict: 'EA',
                transclude:true,
                scope: {
                    formType: '=',
                    formTitle: '='

                },
                link: function (scope, element, attr, ctrl) {
                    debugger;
                    // scope.title = ctrl.title;
                    // scope.type = ctrl.title;
                }
            };
        })


})();