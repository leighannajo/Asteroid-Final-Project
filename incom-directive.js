(function(){
  function incomDirective() {
    return {
      restrict: "A",
      link: function($scope, $element, $attrs) {
        $element.on("click", function() {
          $scope.$apply(function() {
            $element.css("height", "auto");
          });
        });
        $element.on("mouseleave", function() {
          $scope.$apply(function() {
            $element.css("height", "50px");
          });
        });
      }
    };
  }
  angular
  .module("app")
  .directive("incomDirective", incomDirective);
})();
