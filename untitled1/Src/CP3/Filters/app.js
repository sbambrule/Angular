"use strict";
angular.module('myApp',[]);
angular.module('myApp').controller('MainController',[function () {
    this.user={
        firstName:'John',
        lastName:'smith',
        accountType:'CHECKING',
        currencyType:'USD',
        balance:1349.2
    };
}]);