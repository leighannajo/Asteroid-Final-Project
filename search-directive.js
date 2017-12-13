(function(){
  function searchDirective() {
    return {
      restrict: "A",
      link: function($scope, $element, $attrs) {
         $element.on('click', function(){
           var result2 = document.getElementsByClassName("_720kb-datepicker-calendar")[0];
           result2.classList.toggle("showing");
         })
        }
      }
    };
  angular
  .module("app")
  .directive("searchDirective", searchDirective);
})();
