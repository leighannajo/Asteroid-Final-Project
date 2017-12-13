(function(){
  function homeDirective() {
    return {
      restrict: "A",
      link: function($scope, $element, $attrs) {
        $element.on("click", function() {
          console.log(this);
          this.classList.toggle("random");
          });
        }
      }
    };
  angular
  .module("app")
  .directive("homeDirective", homeDirective);
})();
