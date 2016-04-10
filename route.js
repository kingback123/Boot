
app.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'view/FindMusic.html',
                controller:'FindMusicCtrl'
            });
    }]);