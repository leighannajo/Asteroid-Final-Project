(function(){
angular
  .module("app")
  .config(function($routeProvider){
    $routeProvider
      .when("/home", {
        template: `<home-component></home-component>
                   <meter-component></meter-component>
                   <search-component></search-component>
                   `
      }).when("/incoming", {
        template: `
                  <incom-component></incom-compnent>
                  `
      })
  })

}());
