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
        var closeApproach = currentAsteroid.close_approach_data;
        var diameterMax = currentAsteroid.estimated_diameter.meters.estimated_diameter_max;
        var diameterMin = currentAsteroid.estimated_diameter.meters.estimated_diameter_min;
        var velocitySecond = closeApproach[0].relative_velocity.kilometers_per_second;
        risk = 0;

        if (closeApproach[0].miss_distance.kilometers < 7479893) {
          risk = risk + 1;
        }
        if (closeApproach === 10) {
          risk = risk + 1;
        } else if (velocitySecond > 10 && velocitySecond < 15) {
          risk = risk + 1;
        }  else if (velocitySecond > 20) {
          risk = risk + 2;
        }
        if (((diameterMax + diameterMin)/2) < 25) {
          risk = 0;
        } else if (((diameterMax + diameterMin)/2) > 25 && ((diameterMax + diameterMin)/2) < 1000) {
          risk = risk + 1;
        } else if (((diameterMax + diameterMin)/2) > 5000) {
          risk = risk + 2;
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
