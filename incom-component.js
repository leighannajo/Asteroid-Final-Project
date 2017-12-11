(function(){
  var incomComponent = {
    template:`

    <div class="incom">
    <h3>Incoming Asteroids!</h3>
    <div class="container">
    <div incom-directive class="asteroid" ng-repeat="objects in $ctrl.displayArray track by $index">{{objects.name}}<br>{{objects.date}}<br>{{objects.distanceau}}<br>{{objects.distancemi}}<br>{{objects.distancekm}}<br>{{objects.speed}}<br>{{objects.orbits}}
    </div>
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
          vm.asteroidObj = {
            name : "Name: " + item[0],
            date: "Date of Close Approach: " + item[3],
            distanceau: "Distance: " + Number(item[4]).toFixed(12) + " AU",
            distancemi: (Number(item[4])*92000000).toFixed(0) + " miles",
            distancekm: ((Number(item[4])*92000000)*1.60934).toFixed(0) + " km",
            speed: "Speed: " + Number(item[5]).toFixed(5) + " km/s",
            orbits: "Orbiting: " + item[10]
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
