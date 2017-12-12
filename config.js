(function(){
angular
  .module("app")
  .config(function($routeProvider){
    $routeProvider
      .when("/home", {
        template: `
                  <h1 class="title">Here's some cool stuff</h1>
                  <meter-component></meter-component>
                  <home-component></home-component>
                  `
      }).when("/incoming", {
        template: `
                  <h1 class="title">Here's some cool stuff</h1>
                  <incom-component></incom-compnent>
                  <meter-component></meter-component>
                  `
      }).when("/search", {
        template:`
                  <h1 class="title">Here's some cool stuff</h1>
                  <search-component></search-component>
                  <meter-component></meter-component>
        `
      }).otherwise({
          redirectTo: "/home"
      })
  })

}());
