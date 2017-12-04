(function(){
var homeComponent = {
  controller: "Controller",
  template: `<button ng-click="$ctrl.getData();">Click Here</button>
  <h1>{{$ctrl.today}}</h1>`
};
angular
.module("app")
.component("homeComponent", homeComponent);
})();
