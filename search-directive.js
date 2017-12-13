(function(){
  function searchDirective() {
    return {
      restrict: "A",
      link: function($scope, $element, $attrs) {
         var result = document.getElementsByTagName("input");
         var wrappedResult = angular.element(result);
         wrappedResult.on("click", function() {
          var result2 = document.getElementsByClassName("_720kb-datepicker-calendar");
          var wrappedResult2 = angular.element(result2);
          wrappedResult2.css("display", "inline-block");
          });
          var result3 = document.getElementById("button");
          var wrappedResult3 = angular.element(result3);
          wrappedResult3.on("click", function() {
            var result2 = document.getElementsByClassName("_720kb-datepicker-calendar");
            var wrappedResult2 = angular.element(result2);
            wrappedResult2.css("display", "none");
          })
        }
      }
    };
  angular
  .module("app")
  .directive("searchDirective", searchDirective);
})();
