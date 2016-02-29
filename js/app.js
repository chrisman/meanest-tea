// TODO create /src/js, and browserify that shiz
var app = angular.module('chrisbrown', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'MainController'
    })
    .when('/cart', {
      templateUrl: 'partials/cart.html',
      controller: 'CartController'
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
    })

  $locationProvider.html5Mode(true);
});
