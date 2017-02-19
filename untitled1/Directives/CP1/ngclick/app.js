"use strict";
angular.module('myApp',[]);
var mainctrl=null;
angular.module('myApp').controller('MainController',[function () {

    var vm =this;
    mainctrl=this;
    vm.clickCount=0;
    vm.updateClickCount=function (amount) {
        vm.clickCount+=amount;
    }
}]);
function externalClick(e,amt) {
var $scope=angular.element(e).scope();
    mainctrl.clickCount+=parseInt(amt);
    $scope.$apply();
}
