"use strict";
angular.module('myApp',[]);
angular.module('myApp').controller('MainController',[function () {
    this.cars=
        [
            {make:'Mazda', year:2013},
            {make:'TATA', year:2003},
            {make:'BMW', year:2011},
            {make:'Toyota', year:2010},
            {make:'Mahendra', year:2012}
        ];
    this.carType='partials/cars-short.html';
}]);

