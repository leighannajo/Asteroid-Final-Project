(function(){
  function IncomService($http) {
    var asteroidData;
    var arrayLength;
    return {
      startIncom: startIncom,
      getData: getData
    };
    function startIncom() {
      return $http ({
        method: "GET",
        url: "https://ssd-api.jpl.nasa.gov/cad.api?body=all&date-max=+%2b7"
      }).then(function(response){
        asteroidData = response.data.data;
      })
    }
    function getData() {
      return asteroidData;
    }
  }
  angular
  .module("app")
  .factory("IncomService", IncomService);
})();
