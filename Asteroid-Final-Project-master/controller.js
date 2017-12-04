(function(){
  function Controller(AsteroidService) {
    var vm = this;

    vm.getData = function() {
      AsteroidService.makeRequest();
    };

  }
  angular
  .module("app")
  .controller("Controller", Controller);
}());
