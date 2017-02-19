"use strict";
angular.module('myApp',[]);
angular.module('myApp').directive('tstGenerateNumber',function () {
    return {
        scope:{
            generatorFunction:'&',
            onSave:'&',
            count:'=?'
        },
        templateUrl:'templates/number.html',
        restrict:'E',
        controller: function ($scope) {
            if ($scope.generatorFunction) {
                $scope.items = $scope.generatorFunction({count: $scope.count});
            }
            $scope._onSave = function () {
                if ($scope.onSave) {
                    $scope.onSave();
                }
            };
        }
    };
});

angular.module('myApp').controller('MainController',[function () {
    this.randomNumber = function (count) {
        var results = [];
        count = count || 10;
        for (var c = 0; c <= count; c++) {
            var item = Math.round(Math.random() * 1000) + 1;
            results.push(item);
        }
        return results;
    };
    this.sequentialNumber = function (count) {
        var results = [];
        count = count || 10;
        for (var c = 0; c <= count; c++) {
            results.push(c);
        }
        return results;
    };
    this.saveFirst = function () {
        alert('The First item is saved');
    };
    this.saveSecond = function () {
        alert('The second item is saved');
    };
}]);
