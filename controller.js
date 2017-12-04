(function(){
  function Controller(AsteroidService) {
    var vm = this;
    vm.asteroidArray;
    vm.today = new Date();
    vm.dd = vm.today.getDate();
    vm.mm = vm.today.getMonth()+1;
    vm.yyyy = vm.today.getFullYear();
    vm.today = (vm.mm + "/" + vm.dd + "/" + vm.yyyy);

    vm.asteroidData;
    vm.getRequest = function() {
      AsteroidService.makeRequest();
    };
    vm.getRequest();

    vm.getAsteroidData = function() {
      AsteroidService.getData();
      vm.asteroidArray = AsteroidService.getData();
    };
    vm.getAsteroidData();

  }
  angular
  .module("app")
  .controller("Controller", Controller);
}());
