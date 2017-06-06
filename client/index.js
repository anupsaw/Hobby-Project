
(function () {
    'use strict';
    angular.module('as-admin',[]);
    angular.module('MovieApp', ['ui.router','as-ui','as-common','as-admin','as-init']);
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['MovieApp']);
    });
})();




