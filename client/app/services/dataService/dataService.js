(function () {
    'use strict';

    angular.module('MovieApp')
        .service('dataService', ['$http', '$q', '$location', function ($http, $q, $location) {

            var DataService;

            DataService = {
                Put: DataHandler('PUT'),
                Post: DataHandler('POST'),
                Delete: DataHandler('DELETE'),
                Get: DataHandler('GET'),
                CheckEmail: DataHandler('POST', 'checkemail')
            };

            return DataService;

            function DataHandler(method, appendUrl) {

                return function (data, header) {

                    var url = creatURL(appendUrl);
                    var defer = $q.defer();
                    $http({
                        method: method,
                        url: url,
                        data: data,
                        header: header
                    }).then(function (data) {
                        defer.resolve(data.data);
                    }, function (error) {
                        defer.reject(error);
                    });

                    return defer.promise;

                };
            }

            function creatURL(eUrl) {
                var url = $location.$$url;
                if (eUrl === undefined || eUrl === '' || eUrl === null) {
                    url = url;
                } else {
                    url = url + '/' + eUrl;
                }

                return url;

            }

        }]);



})();