/**
 * Created by sajju on 5/16/2017.
 */

angular.module('app.crud')
 .factory('UserService', UserService);

UserService.$inject = ['$http'];

function UserService($http){
    var userservice = {};

    userservice.getUsers = function(successCB, errorCB){
        // var req = {
        //     method: 'GET',
        //     url: Config.BASE_URL + '/banks',
        //     data: {}
        // }
        // $http(req).then()
        $http.get("http://127.0.0.1:9000/api/v1/getUsers")
            .then(function(response){
               if(response.statusText === 'OK') {
                   successCB(response.data.users);
               } else {
                   errorCB(response);
               }

            }, function(err){
                errorCB(err);
            });

    }

    userservice.addUser = function(user, successCB, errorCB){
        $http.post('http://127.0.0.1:9000/api/v1/addUser', user)
            .then(function(response){

                if(response.statusText === 'OK') {
                    successCB(response.data.message);
                } else {
                    errorCB(response);
                }

            }, function(err){
                errorCB(err);
            });
    }

    userservice.getUserById = function(userId, successCB, errorCB){
        $http.post('http://127.0.0.1:9000/api/v1/getUserById', {id: userId} )
            .then(function(response){
                if(response.statusText === 'OK') {
                    successCB(response.data.user[0]);
                } else {
                    errorCB(response);
                }

            }, function(err) {
                errorCB(err);
            });
    }

    userservice.updateUser = function(user, successCB, errorCB){
        $http.post('http://127.0.0.1:9000/api/v1/updateUser', user)
            .then(function(response){
              if(response.statusText === 'OK') {
                  successCB(response.data.message);
              } else {
                  errorCB(response)
              }
            }, function(err){
                errorCB(err);
            });
    }

    userservice.deleteUser = function(id, successCB, errorCB) {
        $http.post("http://127.0.0.1:9000/api/v1/deleteUser", {id: id})
            .then(function(response){
                if(response.statusText === 'OK') {
                    successCB(response.data.message);
                } else {
                    errorCB(response);
                }

            }, function(err){
                errorCB(err);
            });
    }
    return userservice;
}