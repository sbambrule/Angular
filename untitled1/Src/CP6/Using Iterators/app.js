"usr srict";
angular.module('myApp',[]);

angular.module('myApp').controller('MainController',[function () {

    var vm=this;
    var greethings=['hi','what','how','hello'];
    var names=['anelle','anya','chris','Santosh'];
    vm.greetingsentences=[];
    angular.forEach(names,function (name) {
        var randomGreething=greethings[Math.floor(Math.random()* greethings.length)];
        var sentence= randomGreething+' '+name;
        vm.greetingsentences.push(sentence);

    })

}]);