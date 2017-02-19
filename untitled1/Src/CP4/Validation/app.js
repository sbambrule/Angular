"usr srict";
angular.module('myApp',[]);
angular.module('myApp').controller('MainController',[function () {

    this.user={


    };
    this.submitForm=function (form) {

        if(form.$valid)
        {
            window.alert('pass');
        }else
        {
            window.alert('failed');

        }
    }
}]);