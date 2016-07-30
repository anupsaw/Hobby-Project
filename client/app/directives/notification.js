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

})();