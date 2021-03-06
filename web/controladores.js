//List Controller
app.controller("ListController", ['$scope', '$log', '$http', function ($scope, $log, $http) {

        $http({
            method: 'GET',
            url: '/control_ejercicios_api/api/ejercicios/'
        }).success(function (data, status, headers, config) {
            $scope.ejercicios = data;
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });

    }]);

//Get Controller
app.controller("GetController", ['$scope', '$log', '$http', '$routeParams', function ($scope, $log, $http, $routeParams) {

        $http({
            method: 'GET',
            url: '/control_ejercicios_api/api/ejercicio/' + $routeParams.idEjercicio
        }).success(function (data, status, headers, config) {
            $scope.ejercicio = data;
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });

    }]);