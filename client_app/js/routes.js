(function(){
    'use strict';

    var app = angular.module('app.crud', ['ngRoute']);

      app.config(['$routeProvider', function($routeProvider){
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/userlist.html',
                    controller: 'userListController'
                })
                .when('/addUser', {
                    templateUrl: 'templates/adduser.html',
                    controller: 'userActionController'
                })
                .when('/editUser/:userID', {
                    templateUrl: 'templates/adduser.html',
                    controller: 'userActionController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})();

