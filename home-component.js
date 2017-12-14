(function(){
  var homeComponent = {
    template: `
    <!-- <button>this does nothing</button> -->
        <div id="welcome">
        </div>
        <div class="oftheday">
        <button class="randomizer" type="button" ng-click="$ctrl.getRequest();$ctrl.getAsteroidData();$ctrl.getFirstArray();">ASTEROID RANDOMIZER</button>

        <h1>Your Random Asteroid:</h1>
        <p>Click on Close Approach Data for more info.</p>
        <h6 ng-repeat="data in $ctrl.topAsteroidArray track by $index"><span>Name: </span>{{data.name}}
        <br><span>Potentially Hazardous? </span>{{data.potential}}<br><span>Diameter: </span>{{data.diameter}}<br> <a class="asteroidLink" href="{{data.url}}">More info!</a></h6>
        <p home-directive ng-repeat="info in $ctrl.asteroidArray track by $index"><span>Close Approach Date: </span>{{info.date}}<br><span>Relative Velocity: </span>{{info.kph}}
        <br><span>Miss Distance: </span>{{info.missau}}<br><span>Miss Distance: </span>{{info.missm}}<br><span>Miss Distance: </span>{{info.misskm}}<br><span>Orbiting Body: </span>{{info.orbits}}</p>
      </div>


    `,
    controller:

    function(AsteroidService) {
      var vm = this;
      vm.asteroidArray;
      vm.topAsteroidArray;


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
