"use strict";
angular.module('myApp',[]);
angular.module('myApp').controller('MainController',[function () {
    this.users=[
        {
            firstName: 'santosh bambrule',
            accountType: 'Current',
            currencyType: 'USD',
            balance: 7897.2
        },
        {
            firstName: 'Raju',
            accountType: 'Load',
            currencyType: 'INR',
            balance: 4543.2
        },
        {
            firstName: 'Om',
            accountType: 'Saving',
            currencyType: 'CAD',
            balance: 149.2
        },
        ];
}]);

