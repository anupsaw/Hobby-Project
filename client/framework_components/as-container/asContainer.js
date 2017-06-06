(function () {
    'use strict';
angular.module('as-common',[])
    angular.module('as-common')
        .directive('asContainer', function () {
            return {
                templateUrl:'as-container/asContainer.tpl.html',
                restrict: 'AE',
                controller: 'asContainerCtrl',
                controllerAs: 'asContainerCtrl',
                priority: -1,
                transclude:true
            };

        })
        .controller('asContainerCtrl', function ($scope) {

            var vm = this;
            console.log(vm);
        });

})();