"use strict";

app.controller("AuthCtrl", function($scope, $rootScope, $location, ){
  $scope.loginContainer = true;
  $scope.registerContainer = false;

//Function to Log User In

//Set Login Container
$scope.setLoginContainer = function(){
  $scope.loginContainer = true;
  $scope.registerContainer = false;
}


//Set Register Container
$scope.setRegisterContainer = function (){
  $scope.loginContainer = false;
  $scope.registerContainer = true;
}

//not totally finished register user function
$scope.registerUser = function(registerNewUser){
  AuthFactory.authenticate(registerNewUser).then(function(didRegister){
    registerNewUser.uid = didRegister.uid;
    console.log("registration", didRegister);
    return User
  })
}



});