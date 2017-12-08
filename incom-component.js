(function(){
  var incomComponent = {
    template:`

    <div class="search incom">
    <h3>Incoming Asteroids!</h3>
    <div class="container"><div class="asteroid" ng-repeat="objects in $ctrl.displayArray track by $index">{{objects.name}}<br>{{objects.date}}<br>{{objects.distance}}<br>{{objects.speed}}<br>{{objects.orbits}}</div>
    <meter-component></meter-component>
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
            name : "Name: " + item[0],
            date: "Date of Impact: " + item[3],
            distance: "Distance: " + Number(item[4]).toFixed(12) + " AU",
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
