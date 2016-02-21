app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/list/', {
            templateUrl: "ejercicios/ejercicios-list.html",
            controller: "ListController"
        });
        
//        $routeProvider.when('/find/:nombre?', {
//            templateUrl: "entidadbancaria/entidadbancaria-find.html",
//            controller: "FindController"
//        });
//
        $routeProvider.when('/get/:idEjercicio', {
            templateUrl: "ejercicios/ejercicios-get.html",
            controller: "GetController"
        });
//
//
//        $routeProvider.when('/insert/', {
//            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
//            controller: "InsertController"
//        });
//
//        $routeProvider.when('/delete/:idEjercicio', {
//            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
//            controller: "DeleteController"
//        });
//

        $routeProvider.when('/update/', {
            templateUrl: "entidadbancaria/entidadbancaria-detail.html",
            controller: "UpdateController"
        });
        $routeProvider.when('/admin/', {
            templateUrl: "ejercicios/ejercicios-admin.html",
            controller: "ListController"
        });

    }]);