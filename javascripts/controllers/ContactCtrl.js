"use strict";

app.controller("ContactCtrl", function($scope, ContactFactory){
  $scope.welcome = "hello"; //what exactly does this do?
  $scope.showHide = true;
  $scope.newContact = {};
  $scope.contacts = [];


let getTheContacts = function(){
  ContactFactory.getContacts().then(function(fbContacts){
    $scope.contacts = fbContacts;
  });
};

getTheContacts();

$scope.contactsListed = function() {
  $scope.showHide = true;
};


  //   $scope.moreInfo = function() {
  //   $scope.showHide = false;
  // };

$scope.addContact = function (){
  // $scope.newContact.isCompleted = false; //change this
  ContactFactory.addNewContact($scope.newContact).then(function(contactId){
    getTheContacts();
    $scope.newContact =  "";
    // $scope.showListView = true; //change this
    });
  };

});




