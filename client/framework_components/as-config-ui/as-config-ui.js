/*

card Type : 0 - splited type like mobile view
            1 - single page with one element in single row.
            2 - single page with two element in one row.


 */



(function () {
    'use strict';


    angular.module('as-ui')
        .directive('asConfigUi', function ($parse, $compile, dataService) {
            return {
                template: '<div name ={{name}}></div>',
                restrict: 'E',
                controller: 'uiConfigCtrl',
                controllerAs: 'uiConfigCtrl',
                bindToController: true,
                replace: true,
                scope: {
                    page: '@',
                    name: '@',
                    formConfig: '=',
                    target: '@',
                    actions: '=',
                    cardSize: '=?',
                    formTitle: '@?',
                    formType: '@?'
                },
                link: function (scope, element, attr, ctrl) {



                    function getTemplate(type) {
                        if (type === 'input') {
                            return "'as-config-ui/views/as-input-config.tpl.html'";
                        } else if (type === 'select') {
                            return "'as-config-ui/views/as-select-config.tpl.html'";
                        }

                    }


                    function getTemplateType1() {
                        var len = scope.elements.length;
                        var size = ctrl.cardSize || 5;
                        var title = ctrl.formTitle;
                        var jlen = len % size ? (len + (size - (len % size))) / size : len / size;
                        for (var j = 0; j < jlen; j++) {
                            var asCards = $('<as-cards form-type="uiConfigCtrl.formType" >');
                            if (j === 0) asCards.attr('form-title', "uiConfigCtrl.formTitle");
                            var ilen = len - (size * j) > size ? size + (size * j) : len;
                            for (var i = size * j; i < ilen; i++) {
                                var item = scope.elements[i];
                                ctrl.fields[item.name] = item;
                                var div =  $('<div class="row">').attr('ng-include',getTemplate(item.type));
                                asCards.append(div);
                            }
                            $compile(asCards)(scope);
                            $(element).append(asCards);

                        }
                    }


                    function getTemplateType2() {
                        var asCards = $('<as-cards form-type="uiConfigCtrl.formType">')
                        asCards.attr('form-title', "uiConfigCtrl.formTitle");
                        var len = scope.elements.length;
                        for (var j = 0; j < len; j++) {
                            var childDiv;
                            var div = $('<div class="row">');

                            for (var i = 0; (i <= 1 && (j + i) < len); i++) {
                                var item = scope.elements[j + i];
                                ctrl.fields[item.name] = item;
                                childDiv = $('<div class="col s12 m6">');
                                childDiv.append('<as-' + item.type + '  field="uiConfigCtrl.fields.' + item.name + '" model="model" size="uiConfigCtrl.size"></as-' + item.type + '>');
                                div.append(childDiv);
                                j = j + i;
                            }

                            asCards.append(div);
                        }
                        //$compile(asCards)(scope);
                        $(element).append(asCards);

                    }

                    if (ctrl.formType === '0' || ctrl.formType === '1') {
                        getTemplateType1()
                    } else if (ctrl.formType === '2') {
                        getTemplateType2()
                    }

                }
            };
        })
        .controller('uiConfigCtrl', function ($scope, $compile, $templateCache, dataService) {

            var vm = this;
            vm.cardType = vm.cardType || '0';
            vm.fields = {};
            var model = {};
            var _model = {}
            var elements = [{
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
                        editable: false, //optional
                        disabled: false, //optional
                    }

                },
                {
                    type: 'select',
                    name: 'Gender', //element name as well as model name
                    attr: {
                        type: '',
                        key: 'Gender', // this would be id
                        label: 'SEX',
                        class: '', //optional
                    },
                    config: {
                        // required: true, //optional
                        editable: false, //optional
                        //disabled: true, //optional
                    },
                    select: {
                        options:
                        [
                            { code: 0, value: 'option 1' },
                            { code: 1, value: 'option 2' }
                        ]
                    }

                }, {
                    type: 'select',
                    name: 'Name', //element name as well as model name
                    attr: {
                        type: 'multiple',
                        key: 'Name', // this would be id
                        label: 'Name',
                        class: '', //optional
                    },
                    config: {
                        required: true, //optional
                        editable: true, //optional
                        disabled: true, //optional
                    },
                    select: {
                        options:
                        [
                            { code: 0, value: 'option 1' },
                            { code: 1, value: 'option 2' },
                            { code: 2, value: 'option 3' },
                            { code: 3, value: 'option 4' }
                        ]
                    }

                }
            ]


            $scope.elements = vm.formConfig || elements;
            vm.save = save;


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

            function save() {
                dataService.Put($scope.model);
            }
            function cancel() {

            }



        });

})();