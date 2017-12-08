(function(){
  function MeterService($http) {
    var asteroidData;
    var currentAsteroid;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var risk = 0;

    if (dd<10) {
      dd = dd.toString();
      dd = "0" + dd;
    }

    today = (yyyy + "-" + mm + "-" + dd).toString();
    console.log(today);

    return {
      makeRequest: makeRequest,
      getMeterData: getMeterData

    };
    function makeRequest() {
      return $http({
        method: "GET",
        url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-12-07&api_key=WJqgdCXy65yXJVQE6Se8wR4TmyDe6SqNONYiN4ef"
      }).then(function(response) {
        asteroidData = response;
        currentAsteroid = asteroidData.data.near_earth_objects[today][0];
        risk = 0;
        if (currentAsteroid.close_approach_data[0].miss_distance.kilometers < 7479893) {
          risk = risk + 1;
        }
        if (currentAsteroid.close_approach_data[0].relative_velocity.kilometers_per_second === 10) {
          risk = risk + 1;
        } else if (currentAsteroid.close_approach_data[0].relative_velocity.kilometers_per_second > 10 && currentAsteroid.close_approach_data[0].relative_velocity.kilometers_per_second < 15) {
          risk = risk + 2;
        } else if (currentAsteroid.close_approach_data[0].relative_velocity.kilometers_per_second > 15 && currentAsteroid.close_approach_data[0].relative_velocity.kilometers_per_second < 20) {
          risk = risk + 3;
        } else if (currentAsteroid.close_approach_data[0].relative_velocity.kilometers_per_second > 20) {
          risk = risk + 4;
        }
        if (((currentAsteroid.estimated_diameter.meters.estimated_diameter_max + currentAsteroid.estimated_diameter.meters.estimated_diameter_min)/2) < 25) {
          risk = 0;
        } else if (((currentAsteroid.estimated_diameter.meters.estimated_diameter_max + currentAsteroid.estimated_diameter.meters.estimated_diameter_min)/2) > 25 && ((currentAsteroid.estimated_diameter.meters.estimated_diameter_max + currentAsteroid.estimated_diameter.meters.estimated_diameter_min)/2) < 1000) {
          risk = risk + 1;
        } else if (((currentAsteroid.estimated_diameter.meters.estimated_diameter_max + currentAsteroid.estimated_diameter.meters.estimated_diameter_min)/2) > 5000) {
          risk = risk + 5;
        }
        if (currentAsteroid.is_potentially_hazardous_asteroid === true) {
          risk = 10;
        }
        return risk;
      });

    }
    function getMeterData() {
    //  console.log(currentAsteroid);
      return currentAsteroid;
    }

  }
  angular
  .module("app")
  .factory("MeterService", MeterService);
})();
