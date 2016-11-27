"use strict";

app.controller("ContactCtrl", function($scope, ContactFactory){
  $scope.welcome = "hello";
  $scope.showHide = true;
  $scope.newContact = {};
  $scope.contacts = [];


let getTheContacts = function(){
  ContactFactory.getContacts().then(function(fbContacts){
    $scope.contacts = fbContacts;
  });
};

getTheContacts();





});




