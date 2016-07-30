(function () {
    'use strict';

    angular.module('asuiform', [])
    angular.module('asuiform')
        .directive('asForm', function ($parse) {
            return {

                restrict: 'E',
                controller: 'formCtrl',
                controllerAs: 'formCtrl',
                bindToController:true,
                scope: {
                    page: '@'
                },
                link: function (scope, element, attr, ctrl) {

                }
            };
        })
        .controller('formCtrl', ['$scope', 'dataService', function ($scope, dataService) {

            //private varibale
            var url;

            //controller variable

            //controller methods
            var vm = this;



            // funtions

            function getModel() {
                url = '/' + vm.page.split('.').join('/');
                dataService.Get(null, url).then(function (res) {
                    console.log(res);
                })
            }
            getModel();


        }]);

})();