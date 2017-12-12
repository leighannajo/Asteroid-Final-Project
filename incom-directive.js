(function(){
  function incomDirective() {
    return {
      restrict: "A",
      link: function($scope, $element, $attrs) {


        $element.on("click", function() {
          console.log(this);
          this.classList.toggle("expanded");
          });
        }


      }
    };

  angular
  .module("app")
  .directive("incomDirective", incomDirective);
})();
