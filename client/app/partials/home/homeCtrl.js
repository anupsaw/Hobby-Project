(function () {
'use strict';

    angular.module('MovieApp')
        .controller('homeCtrl', function () {
            var vm = this;

            vm.ShowToast = function(){
                Materialize.toast('soon we will guid you. Thanks for showing interest.', 4000);
            };
        });
        

})();