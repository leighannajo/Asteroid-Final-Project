(function(){
  function AsteroidService($http) {
    var asteroidData;
    return {
      makeRequest: makeRequest
    };
    function makeRequest() {
      return $http({
        method: "GET",
        url: "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=WJqgdCXy65yXJVQE6Se8wR4TmyDe6SqNONYiN4ef"
      }).then(function(response) {
        asteroidData = response;
        var arrayLength = asteroidData.data.near_earth_objects.length;
        var randomNumber = Math.floor(Math.random() * arrayLength);
        // console.log(asteroidData.data.near_earth_objects[0].close_approach_data[0]);
        for(var i=0; i< asteroidData.data.near_earth_objects[randomNumber].close_approach_data.length; i++) {
          // console.log(asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i]);
          console.log(asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].close_approach_date);
          console.log(asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].relative_velocity.kilometers_per_hour);
          console.log(asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].relative_velocity.miles_per_hour);
          console.log(asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].miss_distance.astronomical);
          console.log(asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].miss_distance.miles);
          console.log(asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].miss_distance.kilometers);
          console.log(asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].orbiting_body);
        }
        //display random asteroid data ^^^

        // console.log(asteroidData.data.near_earth_objects);
        // for(var i=0; i< asteroidData.data.near_earth_objects.length; i++){
        //   if (asteroidData.data.near_earth_objects[i].close_approach_data.length === 0) {
        //     console.log("sorry, there is no close approach data");
        //   } else
        //   console.log("cool");
          // console.log(asteroidData.data.near_earth_objects[i].close_approach_data);
        // }
        //loops through asteroid list and displays close approach data of each asteroid ^^^
      });
    }
  }
  angular
  .module("app")
  .factory("AsteroidService", AsteroidService);
})();
