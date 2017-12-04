(function(){
var homeComponent = {
  controller: "Controller",
  template: `<button ng-click="$ctrl.getData();">Click Here</button>`
};
angular
.module("app")
.component("homeComponent", homeComponent);
})();
