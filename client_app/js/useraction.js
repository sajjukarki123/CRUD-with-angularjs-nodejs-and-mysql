(function() {
    'use strict';

    angular.module('app.crud')
        .controller('userActionController', userActionController);

    userActionController.$inject = ['$scope', '$http', '$routeParams', '$window', '$location', 'UserService'];
    function userActionController($scope, $http, $routeParams, $window, $location, UserService){

        var userId = $routeParams.userID;
        if(!angular.isUndefined(userId)){
            UserService.getUserById(userId, function(data){
                $scope.userdata = data;
            });
        }

        $scope.add = function(user){
            UserService.addUser(user, function(data){
                console.log("data", data);
                $scope.userdata = {};
                $location.path('/');
            });
        }

        $scope.update = function(user){
            UserService.updateUser(user, function(data){
                console.log("data", data);
                $scope.userdata = {};
                $location.path('/');
            })
        }
    }
})();
