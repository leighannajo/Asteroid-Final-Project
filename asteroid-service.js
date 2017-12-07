(function(){
  function AsteroidService($http) {
    var asteroidData;
    var arrayLength;
    var asteroidArray = [];
    var moreAsteriod = [];
    var topAsteroidArray = [];
    return {
      makeRequest: makeRequest,
      getData: getData,
      getArray: getArray
    };
    function makeRequest() {
      asteroidArray = [];
      topAsteroidArray = [];
      return $http({
        method: "GET",
        url: "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=WJqgdCXy65yXJVQE6Se8wR4TmyDe6SqNONYiN4ef"
      }).then(function(response) {
        asteroidData = response;
        console.log(asteroidData);
        var asteroidObj;
        var topAsteroidObj;
        var arrayLength = asteroidData.data.near_earth_objects.length;
        var randomNumber = Math.floor(Math.random() * arrayLength);

        topAsteroidObj = {
          name: "Name: " + asteroidData.data.near_earth_objects[randomNumber].name,
          potential: "Potentially Hazardous? " + asteroidData.data.near_earth_objects[randomNumber].is_potentially_hazardous_asteroid,
          diameter: "Diameter: " + (((asteroidData.data.near_earth_objects[randomNumber].estimated_diameter.kilometers.estimated_diameter_min)+(asteroidData.data.near_earth_objects[randomNumber].estimated_diameter.kilometers.estimated_diameter_max))/2),
        }
        topAsteroidArray.push(topAsteroidObj);
        for(var i=0; i< asteroidData.data.near_earth_objects[randomNumber].close_approach_data.length; i++) {
          asteroidObj = {
            date: "Close approach date: " + asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].close_approach_date,
            kph: "Relative Velocity: " + asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].relative_velocity.kilometers_per_hour + "kph",
            mph: "Relative Velocity: " + asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].relative_velocity.miles_per_hour + "mph",
            missau: "Miss distance: " + asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].miss_distance.astronomical + "AU",
            missm: "Miss distance: " + asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].miss_distance.miles + " miles",
            misskm: "Miss distance: " + asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].miss_distance.kilometers + " kilometers",
            orbits: "Orbiting Body: " + asteroidData.data.near_earth_objects[randomNumber].close_approach_data[i].orbiting_body
          }
          asteroidArray.push(asteroidObj);
        }

        // console.log(asteroidData.data.near_earth_objects[randomNumber]);
        //display random asteroid data ^^^

      });
    }

    function getData() {
      return asteroidArray;
    }
    function getArray() {
      return topAsteroidArray;
    }

  }
  angular
  .module("app")
  .factory("AsteroidService", AsteroidService);
})();
