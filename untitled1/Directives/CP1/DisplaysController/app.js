"use strict";
angular.module('myApp',[]);
var mainctrl=null;
angular.module('myApp').controller('MainController',[function () {

    var vm =this;
    vm.showFirstItem=true;
    vm.showSecondItem=false;
    /**
     * @return {boolean}
     */
    this.ShowSecondItemMethod=function ()     {
        return  vm.showSecondItem;
    }
}]);
