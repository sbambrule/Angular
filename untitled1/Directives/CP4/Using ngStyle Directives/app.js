"use strict";
angular.module('myApp',['ngSanitize']);

angular.module('myApp').controller('MainController',['$sce',function ($sce) {
    this.Style2={
        color:'blue',
        fontSize:'10px'
    };
    this.enable= function () {
        this.Style1={
            color:'red',
            fontSize:'32px'
        };
    };
    this.disable=function () {
        this.Style1 =null;
    };
}]);
