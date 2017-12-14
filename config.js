(function(){
  angular
  .module("app")
  .config(function($routeProvider){
    $routeProvider
    .when("/home", {
      template: `
      <div class="title">
      <div id="welcome">
      <h1 class="typewriter">Welcome</h1>
      </div>
      <div id="textcontainer">
      <p id="text" class="typewriter2">Is the end near? Check out our armageddon meter to view Earth's current risk status.</p>
      </div>
      </div>
      <meter-component></meter-component>
      <home-component></home-component>
      `
    }).when("/incoming", {
      template: `
      <div class="title">
      <h1 class="typewriter">Incoming Asteroids</h1>
      </div>
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
