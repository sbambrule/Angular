"use strict";
angular.module('myApp',[]);


angular.module('myApp').controller('ParentController',['$scope', function ($scope) {
    this.message='Hello fron the parent';
}]);

angular.module('myApp').controller('FirstChild', [function () {
    this.message='Hello from the Fist Chils';
}])

angular.module('myApp').controller('SecondChild',['$interval','$scope',function ($interval,$scope) {

    this.message='hello from the second child';
    this.value =1;

    $interval(function () {
        this.value = Math.round(Math.random() * 100000) + 1;
    }.bind(this),2000);

    $scope.$watch('second.value',function (newValue,oldValue) {
        console.log('New: ',newValue, 'old :' ,oldValue);
    });

}]);
