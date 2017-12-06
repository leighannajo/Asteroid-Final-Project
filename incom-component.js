(function(){
  var incomComponent = {
    template:`

    <div class="search">
    <h3>Incoming Asteroids!</h3>
    <div class="container"><div class="asteroid" ng-repeat="objects in $ctrl.displayArray">{{objects}}</div>
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
            Name : item[0],
            "Close Approach Date": item[3],
            "Closest Distance from Earth": item[4] + "AU",
            "Speed ": item[5] + "km/s",
            "Orbits Around: ": item[10]
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
