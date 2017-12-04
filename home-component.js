(function(){
var homeComponent = {
  controller: "Controller",
  template: `<button ng-click="$ctrl.getRequest(); $ctrl.getAsteroidData();">Click Here</button>
  <h1>{{$ctrl.today}}</h1>
  <p ng-repeat="info in $ctrl.asteroidArray track by $index">{{info}}</p>`
};
angular
.module("app")
.component("homeComponent", homeComponent);
})();
