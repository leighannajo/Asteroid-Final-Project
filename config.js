(function(){
angular
  .module("app")
  .config(function($routeProvider){
    $routeProvider
      .when("/home", {
        template: `<home-component></home-component>
                   <meter-component></meter-component>
                   `
      }).when("/incoming", {
        template: `
                  <incom-component></incom-compnent>
                  <meter-component></meter-component>
                  `
      }).when("/search", {
        template:`
                  <search-component></search-component>
                  <meter-component></meter-component>
        `
      })
  })

}());
