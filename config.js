(function(){
  angular
  .module("app")
  .config(function($routeProvider){
    $routeProvider
    .when("/home", {
      template: `
      <h1 class="title">Welcome</h1>
      <meter-component></meter-component>
      <home-component></home-component>
      `
    }).when("/incoming", {
      template: `
      <h1 class="title">View incoming asteroids for the next 7 days</h1>
      <meter-component></meter-component>
      <incom-component></incom-compnent>

      `
    }).when("/search", {
      template:`
      <h1 class="title">Search for asteroids by close approach date</h1>
      <meter-component></meter-component>
      <search-component></search-component>

      `
    }).otherwise({
      redirectTo: "/home"
    })
  })

}());
