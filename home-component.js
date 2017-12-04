(function(){
var homeComponent = {
  controller: "Controller",
  template: `
  <button>this does nothing</button>
  <h1>{{$ctrl.today}}</h1>
  <p ng-repeat="info in $ctrl.asteroidArray track by $index">{{info}}</p>


  `
};
angular
.module("app")
.component("homeComponent", homeComponent);
})();
