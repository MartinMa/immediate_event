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
    var interval, intervalWrapper, updateCounter;

    $scope.counter = 0;
    $scope.test = {};

    $scope.templatePath = function () {
      return 'templates/' + $scope.counter + '.html';
    };

    $scope.onTap = function () {
      console.log('onTap');
      updateCounter();
    };

    updateCounter = function () {
      var i;

      // Increment counter.
      $scope.counter = ($scope.counter >= 9) ? 0 : $scope.counter + 1;

      // Writing big object on the $scope.
      for (i = 0; i < 10000; i = i + 1) {
        $scope.test[i] = "Lorem ipsum dolor sit amet";
      }
    };

    intervalWrapper = function () {
      console.log('interval');
      updateCounter();
    };

    interval = $interval(intervalWrapper, 1000);

    $scope.$on('$destroy', function () {
      $interval.cancel(interval);
    });
  });