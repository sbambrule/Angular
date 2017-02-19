"use strict";
angular.module('myApp',[]);
angular.module('myApp').controller('MainController',[function () {
    this.standardBind='This is a standard binding.';
    this.firstBind='This is a first template binding.';
    this.secondBind='This is a second template binding.';
    this.nonBind='this is a non bind';
}]);
