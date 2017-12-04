(function(){
angular
  .module("app")
  .config(function($routeProvider){
    $routeProvider
      .when("/home", {
        template: `<home-component></home-component>
                   <meter-component></meter-component>`
      })
  })

}());
