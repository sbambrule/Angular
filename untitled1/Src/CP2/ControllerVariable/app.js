"use strict";
//noinspection JSUnresolvedFunction
angular.module('myApp',[]);
angular.module('myApp').controller('ParentController',['$scope', function ($scope) {
    $scope.Mode={name:'Santosh'};
}]);

angular.module('myApp').controller('ChildController',['$scope',function ($scope) {

}]);