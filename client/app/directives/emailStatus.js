(function () {
    'use strict';

    angular.module('MovieApp')
        .directive('emailStatus', function () {
            return {

                restrict: 'A',
                controller: 'emailStatusCtrl',
                controllerAs: 'emailStatusCtrl',
                priority: 0,
                link: function (scope, element, attr, ctrl) {

                    element.on('blur', function () {
                        var at = attr;
                        var val = element.val();
                        ctrl.checkEmailStatus(val).then(function (res) {
                            var scop = scope;
                            var eleParent = element.parent();
                            if (res === true) {

                                eleParent.find('span').remove();
                                element.after("<span style='color:green' class='glyphicon glyphicon-ok form-control-feedback' area-hidden='true'></span>");
                            } else {

                                eleParent.find('span').remove();
                                element.after("<span style='color:#a94442' class='glyphicon glyphicon-remove form-control-feedback' area-hidden='true'></span>");
                                element.after("<span style='color:#a94442'>" + attr.emailStatus + "</span>");

                            }
                        });

                    });
                }

            };

        })
        .controller('emailStatusCtrl', ['dataService', function (dataService) {


            var ctrl = this;
            ctrl.checkEmailStatus = checkEmailStatus;
            function checkEmailStatus(val) {
                return dataService.CheckEmail({ EmailId: val });
            }

        }]);

})();