"use strict";
angular.module('myApp',[]);
angular.module('myApp').directive('tstVehicleView',function () {
return {
    scope:{
        item:'='
    },
    templateUrl:'templates/vehicle.html',
    restrict:'AE',
};
});

angular.module('myApp').controller('MainController',['$scope',function ($scope)
{

    $scope.firstItem={
        year: 2042,
        make:'TATA',
        model:'IRED',
        price:12232
    };
    $scope.secondItem={
        year: 2013,
        make:'Mazda',
        model:'E2',
        price:36544
    };
}]);
