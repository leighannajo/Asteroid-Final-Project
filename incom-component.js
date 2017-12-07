(function(){
  var incomComponent = {
    template:`

    <div class="search incom">
    <h3>Incoming Asteroids!</h3>
    <div class="container"><div class="asteroid" ng-repeat="objects in $ctrl.displayArray track by $index">{{objects.name}}<br>{{objects.date}}<br>{{objects.distance}}<br>{{objects.speed}}<br>{{objects.orbits}}</div>
    </div>
    `,
    controller:

    function(IncomService) {
      var vm = this;
      vm.incomData;
      vm.displayArray = [];
      vm.asteroidObj;
      IncomService.startIncom().then(function(){
        vm.incomData = IncomService.getData();

        vm.incomData.forEach(function(item) {
          console.log(item);
          vm.asteroidObj = {
            name : item[0],
            date: item[3],
            distance: Number(item[4]).toFixed(3) + "AU",
            speed: Number(item[5]).toFixed(3) + "km/s",
            orbits: item[10]
          }
          vm.displayArray.push(vm.asteroidObj);
        })
      })
    }


  };
  angular
  .module("app")
  .component("incomComponent", incomComponent);
})();
