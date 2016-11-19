"use strict";

app.factory("ContactFactory", function($q, $http, FIREBASE_CONFIG){
  var getContacts = function (){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`) //make sure this is correct
        .success(function(response){
          let contacts = [];
          Object.keys(response).forEach(function(key){
            response[key].id = key;
            items.push(response[key]);
          });
          resolve(contacts);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        });
      });
    };

return {getContacts:getContacts}

});