(function(){
  var homeComponent = {
    template: `
    <button>this does nothing</button>
    <h1>{{$ctrl.today}}</h1>
    <h1>Asteroid of the Day</h1>
    <p ng-repeat="info in $ctrl.asteroidArray track by $index">{{info}}</p>
    `,
    controller:

    function(AsteroidService) {
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
      vm.asteroidArray = AsteroidService.getData();
      };

      vm.getAsteroidData();
    }
  };
  angular
  .module("app")
  .component("homeComponent", homeComponent);
})();
