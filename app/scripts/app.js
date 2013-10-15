'use strict';

angular.module('phoneApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'angular-gestures'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
