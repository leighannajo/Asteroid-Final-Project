(function(){
  function MeterService($http) {
    var asteroidData;


    return {
      makeRequest: makeRequest
    };
    function makeRequest() {
      return $http({
        method: "GET",
        url: "https://ssd-api.jpl.nasa.gov/cad.api"
      }).then(function(response) {
        asteroidData = response.data.data[0];
        // asteroidData = Number(asteroidData).toFixed(5);
        return asteroidData;

      });
    }
  }
  angular
  .module("app")
  .factory("MeterService", MeterService);
})();
