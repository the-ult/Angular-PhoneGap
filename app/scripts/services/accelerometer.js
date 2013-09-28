angular.module('phoneApp')
  .factory('accelerometer', ['$rootScope', 'cordovaReady', function ($rootScope, cordovaReady) {
    'use strict';
    return {
      getCurrentAcceleration: cordovaReady(function (onSuccess, onError) {
        navigator.accelerometer.getCurrentAcceleration(function () {
          var that = this,
            args = arguments;

          if (onSuccess) {
            $rootScope.$apply(function () {
              onSuccess.apply(that, args);
            });
          }
        }, function () {
          var that = this,
            args = arguments;

          if (onError) {
            $rootScope.$apply(function () {
              onError.apply(that, args);
            });
          }
        });
      })
    };
  }]);
