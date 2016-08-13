(function () {
    'use strict';

    angular.module('as-ui', []);
    angular.module('as-ui')
        .directive('asForm', function ($parse, $compile) {
            return {
                template: '<form name ={{name}}></form>',
                restrict: 'E',
                controller: 'formCtrl',
                controllerAs: 'formCtrl',
                bindToController: true,
                replace:true,
                scope: {
                    page: '@',
                    name: '@'
                },
                link: function (scope, element, attr, ctrl) {

                    scope.getTemplateUrl = getTemplateUrl;
                    function getTemplateUrl() {
                         var div = $('<div>')
                        scope.elements.forEach(function (item, index, self) {
                            ctrl.fields[item.name] = item;
                            if (item.type === 'input') {
                                div.append('<as-' + item.type + '  field="formCtrl.fields.' + item.name + '" model="model"></as-' + item.type + '>');
                            }
                        });

                        $compile(div)(scope);
                        $(element).append(div);
                    }
                    getTemplateUrl();

                }
            };
        })
        .controller('formCtrl', ['$scope', '$compile', '$templateCache', 'dataService', function ($scope, $compile, $templateCache, dataService) {

            var vm = this;
            vm.fields = {};
            $scope.elements = [{
                type: 'input',
                name: 'FirstName',
                attr: {
                    type: 'text',
                    key: 'FirstName', // this would be id
                    label: 'First Name',
                    class: '', //optional
                },
                config: {
                    required: true, //optional
                    editable: true, //optional
                    disabled: true, //optional
                }

            }, {
                    type: 'input',
                    name: 'LastName', //element name as well as model name
                    attr: {
                        type: 'text',
                        key: 'LasttName', // this would be id
                        label: 'Last Name',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: true, //optional
                        disabled: true, //optional
                    }

                }]

            var model = {};
            var _model = {}

            $scope.elements.forEach(function (item, i, self) {

                Object.defineProperty(model, item.name, {

                    get: function () {
                        return _model[item.name];
                    },
                    set: function (val) {
                        _model[item.name] = val;
                    },
                    enumerable: true
                });
            });

            $scope.model = model;

            $scope.$watch('ModelData.FirstName', function (o, v) {
                debugger;
            })



            //debugger;
            //getTemplateUrl()


            // getTemplateUrl();

        }]);

})();