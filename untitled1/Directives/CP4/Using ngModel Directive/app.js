"usr srict";
angular.module('myApp',[]);
angular.module('myApp').controller('MainController',[function () {

    this.user={
        firstName:'',
        lastName:"",
        email:'',
        optIn:false,
        selectedColor:'white',
    };
    this.colors=
        [
            {name:'White',value:'white'},
            {name:'Blue',value:'blue'},
            {name:'Red',value:'red'},
            {name:'Green',value:'green'},
        ];

}]);
