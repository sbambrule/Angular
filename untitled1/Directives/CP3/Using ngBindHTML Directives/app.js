"use strict";
angular.module('myApp',['ngSanitize']);

angular.module('myApp').controller('MainController',['$sce',function ($sce) {
    this.htmlData="Hello <strong>AngularJs</strong>";
    this.dangerousScript="<script> alert('do something malicious'); </script>  Hello from the dangerous script";
    this.damgerousCss="<span class='some-class' style='color:red'> Hello from the dangerous CSS.</span>";
    this.trustedCSS=$sce.trustAsHtml("<span class='some-class' style='color:red'> Hello from the trusted CSS.</span>");
}]);
