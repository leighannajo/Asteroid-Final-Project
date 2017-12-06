(function(){
  function searchDirective() {
    return {
          restrict: "A",
      link: function($scope, $element, $attrs) {
        $element.on("click", function() {
          $scope.$apply(function() {
            console.log("this directive is working");
          });
        });
      }
    };
  }
  angular
    .module("app")
    .directive("searchDirective", searchDirective);
})();
