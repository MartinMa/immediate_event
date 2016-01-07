// Ionic Starter App

/*global angular: true, console: true, cordova: true, StatusBar: true */

angular.module('ionicApp', ['ionic'])
  .run(function ($ionicPlatform) {
    'use strict';
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .controller('MyCtrl', function ($scope, $interval) {
    'use strict';
    var interval;

    $scope.onTap = function () {
      console.log('onTap');
    };

    function updateFilterValue() {
      console.log('interval');
    }

    interval = $interval(updateFilterValue, 1000);

    $scope.$on('$destroy', function () {
      $interval.cancel(interval);
    });
  });