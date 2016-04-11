
app.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'view/homePage.html',
                controller:'HomePageCtrl'
            });
    }]);