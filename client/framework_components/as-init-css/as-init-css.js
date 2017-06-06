(function () {
    'use strict';
    // $(document).ready(function () {
    //     $('.button-collapse').sideNav();
    // });


    angular.module('as-init', []);
    angular.module('as-init')
        .directive('buttonCollapse', function () {

            return {
                restrict: 'C',
                link: function (scope, element, attr) {

                    $(element).sideNav({

                        menuWidth: attr.menuWidth || 300, // Default is 240
                        edge: attr.edge || 'left', // Choose the horizontal origin
                        closeOnClick: attr.closeOnClick || true
                    });

                    element.on('click', function () {
                        var dm = scope;
                        $(this).sideNav('show');
                    })
                }
            }
        })
        .directive('collapsible', function () {

            return {
                restrict: 'C',
                link: function (scope, element, attr) {
                    $(element).collapsible();
                }
            }
        })


})();