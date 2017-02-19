"usr srict";
angular.module('myApp',[]);
angular.module('myApp').controller('MainController',[function () {
     this.items=[
         {name:'bananas' , type:'fruits'},
         {name:'cheeries',type:'fruits'},
         {name:'Oranges',type:'fruits'},
         {name:'Chicken',type:'meats'},
         {name:'Beef',type:'meats'},
         {name:'Pork',type:'meats'},
         {name:'Milk',type:'dairy'},
         {name:'Beans',type:'dairy'},
         {name:'Celery',type:'vegetables'},
         {name:'Beans',type:'vegetables'},
         {name:'Bread',type:'grains'},
         {name:'Cheese',type:'dairy'},
         {name:'Yogurt',type:'dairy'},
         {name:'Special case fruits',type:'other'},
     ];
}]);