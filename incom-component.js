(function(){
  var incomComponent = {
    template:`
    <div class="incom">
    <h3>Incoming Asteroids</h3>
    <div class="container">
    <div incom-directive class="asteroid" ng-repeat="objects in $ctrl.displayArray track by $index">
    <span>Name: </span>{{objects.name}}<br><span>Date/Time: </span>{{objects.date}}<br><span>Distance: </span>{{objects.distanceau}}<br><span>Miss Distance: </span>{{objects.distancemi}}<br>
    <span>Miss Distance: </span>{{objects.distancekm}}<br><span>Speed: </span>{{objects.speed}}<br><span>Orbiting: </span>{{objects.orbits}}
    </div>
    </div>
    `,
    controller:

    function(IncomService) {
      var vm = this;
      vm.incomData;
      vm.displayArray = [];
      vm.asteroidObj;
      vm.isActive = false;

      IncomService.startIncom().then(function(){
        vm.incomData = IncomService.getData();

        vm.incomData.forEach(function(item) {
          vm.asteroidObj = {
            name : item[0],
            date: item[3],
            distanceau: Number(item[4]).toFixed(12) + " AU",
            distancemi: (Number(item[4])*92000000).toFixed(0) + " miles",
            distancekm: ((Number(item[4])*92000000)*1.60934).toFixed(0) + " kilometers",
            speed: Number(item[5]).toFixed(5) + " km/s",
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
