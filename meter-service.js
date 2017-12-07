(function(){
  function MeterService($http) {
    var asteroidData;
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
      makeRequest: makeRequest
    };
    function makeRequest() {
      return $http({
        method: "GET",
        url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-12-07&api_key=WJqgdCXy65yXJVQE6Se8wR4TmyDe6SqNONYiN4ef"
      }).then(function(response) {
        asteroidData = response;
        if (asteroidData.data.near_earth_objects[today][0].close_approach_data[0].miss_distance.kilometers) {
          risk = risk + 1;
        }
        console.log(asteroidData.data.near_earth_objects[today][0].close_approach_data[0].relative_velocity.kilometers_per_second);
        console.log((asteroidData.data.near_earth_objects[today][0].estimated_diameter.meters.estimated_diameter_max + asteroidData.data.near_earth_objects[today][0].estimated_diameter.meters.estimated_diameter_min)/2);
        console.log(asteroidData.data.near_earth_objects[today][0].is_potentially_hazardous_asteroid);
      });
    }


  }
  angular
  .module("app")
  .factory("MeterService", MeterService);
})();
