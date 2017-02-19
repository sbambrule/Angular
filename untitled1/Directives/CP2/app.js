"use strict";
angular.module('myApp',[]);
var mainctrl=null;
angular.module('myApp').controller('MainController',[function () {
    this.singleClickCount=0;
    this.doubleClickCount=0;

    this.doClick=function () {
        this.singleClickCount+=1;
    };

    this.doDoubleClick=function () {
        this.doubleClickCount+=1;
    };
}]);
