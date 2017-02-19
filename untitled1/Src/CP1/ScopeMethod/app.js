"use strict";
angular.module('myApp',[]);
angular.module('myApp').controller('MainController',['$scope','$interval',function ($scope, $interval) {
var items=['Apple','banana','Blackberry','BuleBerry','Mango'];
$scope.ItemIndex=null;
$scope.CurrentItem='';
$scope.GetItem=function () {
    $scope.CurrentItem = items[$scope.ItemIndex];
};

    $interval(function () {
        $scope.ItemIndex=Math.round(Math.random()* (items.length-1));
        $scope.GetItem();
    },1000);
}]);