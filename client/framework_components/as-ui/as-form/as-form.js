// (function () {
//     'use strict';

//     angular.module('as-ui')
//         .directive('asForm', function ($parse, $compile, dataService) {
//             return {
//                 template: '<form name ={{name}}></form>',
//                 restrict: 'E',
//                 controller: 'formCtrl',
//                 controllerAs: 'formCtrl',
//                 bindToController: true,
//                 replace: true,
//                 scope: {
//                     page: '@',
//                     name: '@',
//                     formConfig: '=',
//                     target: '@',
//                     actions: '='
//                 },
//                 link: function (scope, element, attr, ctrl) {

//                     scope.getTemplateUrl = getTemplateUrl;
//                     function getTemplateUrl() {
//                         var div = $('<div>')
//                         scope.elements.forEach(function (item, index, self) {
//                             ctrl.fields[item.name] = item;
//                             div.append('<as-' + item.type + '  field="formCtrl.fields.' + item.name + '" model="model"></as-' + item.type + '>');
//                         });
//                         var btns = '<ng-include src="' + "'as-ui/as-buttons/as-buttons.tpl.html'" + '"></ng-include>'
//                         div.append(btns);
//                         $compile(div)(scope);
//                         $(element).append(div);
//                     }
//                     getTemplateUrl();

//                 }
//             };
//         })
//         .controller('formCtrl', function ($scope, $compile, $templateCache, dataService) {

//             var vm = this;
//             vm.fields = {};
//             var model = {};
//             var _model = {}
//             var elements = [{
//                 type: 'input',
//                 name: 'FirstName',
//                 attr: {
//                     type: 'text',
//                     key: 'FirstName', // this would be id
//                     label: 'First Name',
//                     class: '', //optional
//                 },
//                 config: {
//                     required: true, //optional
//                     editable: true, //optional
//                     disabled: true, //optional
//                 }

//             }, {
//                     type: 'input',
//                     name: 'LastName', //element name as well as model name
//                     attr: {
//                         type: 'text',
//                         key: 'LasttName', // this would be id
//                         label: 'Last Name',
//                         class: '', //optional
//                     },
//                     config: {
//                         required: true, //optional
//                         editable: false, //optional
//                         disabled: false, //optional
//                     }

//                 },
//                 {
//                     type: 'select',
//                     name: 'Gender', //element name as well as model name
//                     attr: {
//                         type: '',
//                         key: 'Gender', // this would be id
//                         label: 'SEX',
//                         class: '', //optional
//                     },
//                     config: {
//                         // required: true, //optional
//                         editable: false, //optional
//                         //disabled: true, //optional
//                     },
//                     select: {
//                         options:
//                         [
//                             { code: 0, value: 'option 1' },
//                             { code: 1, value: 'option 2' }
//                         ]
//                     }

//                 }, {
//                     type: 'select',
//                     name: 'Name', //element name as well as model name
//                     attr: {
//                         type: 'multiple',
//                         key: 'Name', // this would be id
//                         label: 'Name',
//                         class: '', //optional
//                     },
//                     config: {
//                         required: true, //optional
//                         editable: true, //optional
//                         disabled: true, //optional
//                     },
//                     select: {
//                         options:
//                         [
//                             { code: 0, value: 'option 1' },
//                             { code: 1, value: 'option 2' },
//                             { code: 2, value: 'option 3' },
//                             { code: 3, value: 'option 4' }
//                         ]
//                     }

//                 }
//             ]


//             $scope.elements = vm.formConfig || elements;
//             vm.save = save;


//             $scope.elements.forEach(function (item, i, self) {

//                 Object.defineProperty(model, item.name, {

//                     get: function () {
//                         return _model[item.name];
//                     },
//                     set: function (val) {
//                         _model[item.name] = val;
//                     },
//                     enumerable: true
//                 });
//             });

//             $scope.model = model;

//             function save() {
//                 dataService.Put($scope.model);
//             }
//             function cancel() {

//             }



//         });

// })();