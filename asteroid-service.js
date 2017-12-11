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
        var randomAsteroid = asteroidData.data.near_earth_objects[randomNumber];
        var diameterMin = randomAsteroid.estimated_diameter.kilometers.estimated_diameter_min;
        var diameterMax = randomAsteroid.estimated_diameter.kilometers.estimated_diameter_max;
        var randomCloseApproach = randomAsteroid.close_approach_data;

        topAsteroidObj = {
          name: "Name: " + randomAsteroid.name,
          potential: "Potentially Hazardous? " + randomAsteroid.is_potentially_hazardous_asteroid,
          diameter: "Diameter: " + (((diameterMin)+(diameterMax))/2),
          url:  randomAsteroid.nasa_jpl_url,
        }
        topAsteroidArray.push(topAsteroidObj);
        for(var i=0; i< randomCloseApproach.length; i++) {
          asteroidObj = {
            date: "Close approach date: " + randomCloseApproach[i].close_approach_date,
            kph: "Relative Velocity: " + randomCloseApproach[i].relative_velocity.kilometers_per_hour + "kph",
            mph: "Relative Velocity: " + randomCloseApproach[i].relative_velocity.miles_per_hour + "mph",
            missau: "Miss distance: " + randomCloseApproach[i].miss_distance.astronomical + "AU",
            missm: "Miss distance: " + randomCloseApproach[i].miss_distance.miles + " miles",
            misskm: "Miss distance: " + randomCloseApproach[i].miss_distance.kilometers + " kilometers",
            orbits: "Orbiting Body: " + randomCloseApproach[i].orbiting_body
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
