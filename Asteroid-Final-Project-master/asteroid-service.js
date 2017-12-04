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
        console.log(asteroidData);
      });
    }
  }
  angular
    .module("app")
    .factory("AsteroidService", AsteroidService);
})();
