(function () {
    'use strict';

    angular.module('css.init', []);
    angular.module('css.init')
        .directive('datepicker', function ($compile) {
            return {
                restrict: 'C',
                require :'ngModel',
                link: function (scope, element, attr, ctrl) {
                    element.on('click', function () {
                            $(this).pickadate({
                                selectMonths: true, // Creates a dropdown to control month
                                selectYears: 15,
                                onSet: function (context) {
                                    ctrl.$setViewValue(new Date(context.select));
                                    $(this)[0].close();
                                }
                            });
                        });
                    // element.on('click', function () {
                    //     datepicker = $('.datepicker').pickadate({
                    //         selectMonths: true, // Creates a dropdown to control month
                    //         selectYears: 15, // Creates a dropdown of 15 years to control year
                    //         onStart: function () {
                    //             console.log('Hello there :)');
                    //         },
                    //         onRender: function () {
                    //             console.log('Whoa.. rendered anew');
                    //         },
                    //         onOpen: function () {
                    //             console.log('Opened up');
                    //         },
                    //         onClose: function () {
                    //             console.log('Closed now');
                    //         },
                    //         onStop: function () {
                    //             console.log('See ya.');
                    //         },
                    //         onSet: function (context) {
                    //             console.log('Just set stuff:', context);
                    //             var scp = scope;
                    //             element.val(new Date(context.select));
                    //         }
                    //     });
                    // });

                }
            };
        });

})();


