// (function () {
//     'use strict';

//     angular.module('MovieApp')
//         .directive('input', function ($parse) {
//             return {

//                 restrict: 'E',
//                 controller: 'inputCtrl',
//                 controllerAs: 'inputCtrl',
//                 priority: 1,
//                 link: function (scope, element, attr, ctrl) {


//                     element.on('keyup', function () {
//                         validate();
//                     });

//                     element.on('blur', function () {
//                         validate();
//                     });

//                     function validate() {
//                         if (attr.required) {
//                             if (element.hasClass('ng-valid') && element.hasClass('ng-not-empty')) {
//                                 element.removeClass('required-error');
//                                 element.addClass('required-ok');
//                             } else {
//                                 element.removeClass('required-ok');
//                                 element.addClass('required-error');
//                             }
//                         }
//                     }

//                     validate();

//                 }
//             };
//         })
//         .controller('inputCtrl', ['dataService', function (dataService) {


//         }]);

// })();


(function () {
    'use strict';

    angular.module('MovieApp')
        .directive('form', function ($parse) {
            return {

                restrict: 'E',
                link: function (scope, element, attr, ctrl) {
                    element.attr('novalidate', '');
                }
            };
        });

    angular.module('MovieApp')
        .directive('toggalEditAccess', function ($parse, $compile) {
            return {
                restrict: 'A',
                link: function (scope, element, attr, ctrl) {
                    var EleQue = [];
                    element.on('click', function () {
                        var parent = element.parent();
                        var input = parent.find('input');
                        var label = parent.find('label');
                        if (attr.toggalEditAccess === 'true') {
                            attr.$set('toggalEditAccess', 'false');
                            element.removeClass('as-edit');
                            element.addClass('active as-undo');
                            input.removeAttr('disabled');
                            Materialize.updateTextFields();
                            input[0].focus();
                            label.addClass('active');
                            scope.editField = false;
                            EleQue.push(element);

                        } else {
                            attr.$set('toggalEditAccess', 'true');
                            input.attr('disabled', "disabled");
                            input.removeClass('valid');
                            label.removeClass('active');
                            element.removeClass('active as-undo');
                            element.addClass('active as-edit');
                            Materialize.updateTextFields();
                            EleQue.pop();
                        }

                    });
                }
            };
        });







})();