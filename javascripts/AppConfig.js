"use strict";

app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);
});







// all below from other exercise

//function that tell us whether or not a person is logged in
let isAuth = (AuthFactory) => new Promise((resolve, reject)=>{
  if(AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
});



app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
  firebase.initializeApp(FIREBASE_CONFIG);

  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){

    let logged = AuthFactory.isAuthenticated();
    let appTo;

if(currRoute.originalPath){
    appTo = 5 !== -1 //true
    appTo = -1 !== -1 //false
    appTo = currRoute.originalPath.indexOf('/auth') !== -1;
}

    console.log("appTo", appTo);
    console.log("hey");

    if(!appTo && !logged){
      event.preventDefault();
      $location.path('/auth');

    }
  });
});

app.config(function($routeProvider){ //routeProvider is angular method that does routes
  $routeProvider
    .when('/auth', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
    .when('/items/list', {
      templateUrl: 'partials/item-list.html',  //this is important how these are spelled here
      controller: 'ItemListCtrl',
      resolve: {isAuth} // if isAuth is true then load this controller/partial
    })
    .when('/items/new', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemNewCtrl',
      resolve: {isAuth}
    })
    .when('/items/view/:id', { //putting a : in front tells us that it will change with dif id (can be named anything)
      templateUrl: 'partials/item-view.html',
      controller: 'ItemViewCtrl',
      resolve: {isAuth}
    })
    .when('/items/edit/:id', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemEditCtrl',
      resolve: {isAuth}
    })
    .when('/logout', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl',
      resolve: {isAuth}
    })
    .otherwise('/auth');
});