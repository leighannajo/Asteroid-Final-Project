(function(){
  function Controller(AsteroidService) {
    var vm = this;
    vm.today = new Date();
    vm.dd = vm.today.getDate();
    vm.mm = vm.today.getMonth()+1;
    vm.yyyy = vm.today.getFullYear();
    vm.today = (vm.mm + '/' + vm.dd + "/" + vm.yyyy);

    vm.asteroidData;
    vm.getRequest = function() {
      AsteroidService.makeRequest();
    };



  }
  angular
  .module("app")
  .controller("Controller", Controller);
}());
