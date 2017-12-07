(function(){
  var homeComponent = {
    template: `
    <button>this does nothing</button>
    <div class="oftheday">
    <h1>Asteroid of the Day</h1>
    <p ng-repeat="data in $ctrl.topAsteroidArray track by $index">{{data.name}}<br>{{data.potential}}<br>{{data.diameter}}</p>
    <p ng-repeat="info in $ctrl.asteroidArray track by $index">{{info.date}}<br>{{info.kph}}<br>{{info.missau}}<br>{{info.missm}}<br>{{info.misskm}}<br>{{info.orbits}}</p>
    </div>
    `,
    controller:

    function(AsteroidService) {
      var vm = this;
      vm.asteroidArray;
      vm.topAsteroidArray;
      vm.today = new Date();
      vm.dd = vm.today.getDate();
      vm.mm = vm.today.getMonth()+1;
      vm.yyyy = vm.today.getFullYear();

      vm.today = (vm.mm + vm.dd + vm.yyyy);

      vm.asteroidData = null;
        vm.getRequest = function() {
          AsteroidService.makeRequest();
        };
        vm.getRequest();
        vm.getAsteroidData = function() {
          vm.asteroidArray = AsteroidService.getData();
        };
        vm.getAsteroidData();

        vm.getFirstArray = function() {
          vm.topAsteroidArray = AsteroidService.getArray();
        };
        vm.getFirstArray();

      }
  };
  angular
  .module("app")
  .component("homeComponent", homeComponent);
})();
