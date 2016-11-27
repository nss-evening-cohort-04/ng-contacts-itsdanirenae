"use strict";

app.controller("NavCtrl", function($scope){
    $scope.navItems = [
    {
      name: "Contacts",
      url: "#/contacts"
    },
    {
      name: "Add New Contact",
      url: "#/add-new-contact"
    },
    {
      name: "Logout",
      url: "#/logout"
    }
  ];
});