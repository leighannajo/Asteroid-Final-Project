(function(){
  angular
  .module("app")
  .config(function($routeProvider){
    $routeProvider
    .when("/home", {
      template: `
      <meter-component></meter-component>
      <home-component></home-component>
      `
    }).when("/incoming", {
      template: `
      <div class="title">
      <div id="welcome">
      <h1 class="typewriter">Incoming</h1>
      </div>
      </div>
      <meter-component></meter-component>
      <incom-component></incom-compnent>
      `
    }).when("/search", {
      template:`
      <div class="title">
      <div id="welcome">
      <h1 class="typewriter">Search</h1>
      </div>
      </div>
      <meter-component></meter-component>
      <search-component></search-component>
      `
    }).otherwise({
      redirectTo: "/home"
    })
  })

}());
