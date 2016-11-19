"use strict";

app.factory("ContactFactory", function($q, $http, FIREBASE_CONFIG){
  var getContacts = function (){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`) //make sure this is correct
        .success(function(response){
          let contacts = [];
          Object.keys(response).forEach(function(key){
            response[key].id = key;
            contacts.push(response[key]);
          });
          resolve(contacts);
        })
        .error(function(errorResponse){
          reject(errorResponse);
      });
    });
  }

  var addNewContact = function(newContact){
    return $q((resolve, reject)=>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`,
        JSON.stringify({
          fullname: newContact.fullname,
          phonenumber: newContact.phonenumber,
          address: newContact.address,
          city: newContact.city,
          state: newContact.state,
          zip: newContact.zip
      })
    )
      .success(function(postResponse){
        resolve(postResponse);
      })
      .error(function(postError){
        reject(postError)
      });
    });
  };

return {getContacts:getContacts, addNewContact:addNewContact}

});



