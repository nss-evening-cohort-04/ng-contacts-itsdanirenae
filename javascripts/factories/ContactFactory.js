"use strict";

app.factory("ContactFactory", function($q, $http, FIREBASE_CONFIG){

//function to load contacts to DOM
  var getContacts = function (userId){
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

 //function to add new contact to DOM
  var postNewContact = function(newPerson){
    return $q((resolve, reject)=>{
      $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`,
        JSON.stringify({
          fullname: newPerson.fullname,
          phonenumber: newPerson.phonenumber,
          address: newPerson.address,
          city: newPerson.city,
          state: newPerson.state,
          zip: newPerson.zip
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

//function to delete contact from DOM

var deleteContact = function(contactId){
  return $q((resolve,reject)=>{
    $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
    .success(function(deleteResponse){
      resolve(deleteResponse);
    })
    .error(function(deleteError){
      reject(deleteError);
    });
  });
};

//function to choose single contact so user can manipulate
var getSingleContact = function(contactId){
  return $q((resolve, reject)=>{
    $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
    .success(function(getSingleResponse){
      resolve(getSingleResponse);
    })
    .error(function(getSingleError){
      reject(getSingleError);
    });
  });
};

// //function to edit contact already loaded to DOM
// // dont forget to add this to bottom return

// var editContact = function(editItem){
//   return $q((resolve, reject)=>{
//     $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${editItem.id}.json`,
//       JSON.stringify({
//         //what to put here?
//       })
//       )
//     .success(function(editResponse){
//       resolve(editResponse);
//     })
//     .error(function(editError){
//       reject(editError);
//     });
//   });
// };


return {getContacts:getContacts, postNewContact:postNewContact, deleteContact:deleteContact, getSingleContact:getSingleContact}
});



