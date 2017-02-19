"use strict";
angular.module('myApp',[]);
var mainctrl=null;
angular.module('myApp').run(function ($rootScope) {
    $rootScope.userModel={
        name:'SAI',
        age: 0
    };
    $rootScope.sayHello=function () {
        return 'Hello from Angular root scope';
    };
})
angular.module('myApp').controller('MainController',["$scope",function ($scope) {
    $scope.userModel={
        name:'santosh',
        age:32
    };
    $scope.sayHello=function () {
        return 'Hello from Angular child scope';
    };

}]);
