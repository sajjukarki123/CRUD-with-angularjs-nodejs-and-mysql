(function() {
    'use strict';

    angular.module('app.crud')
        .controller('userListController', userListController);

    userListController.$inject = ['$scope', '$http', '$window', 'UserService'];
    function userListController($scope, $http, $window, UserService){

      // $http.get("http://127.0.0.1:9000/api/v1/getUsers")
        //     .then(function(response){
        //         $scope.users = response.data.users;
        //     });

        UserService.getUsers(function(data){
            $scope.users = data;
        });

      $scope.delete = function(id){
          UserService.deleteUser(id, function(data){
              console.log("data", data);
              $window.location.reload();
          });
      }
    }
})();
