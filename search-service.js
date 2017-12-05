(function(){
    function SearchService($http) {
       var asteroidData;
       var arrayLength;
        return {
            searchName: searchName

        };
    
    function searchName(text) {
        return $http ({
            method: "GET",
            url: "https://ssd-api.jpl.nasa.gov/cad.api?date-min=" + text + "T00:00:01&date-max="+ text + "T23:59:59&dist-max=1"
        }).then(function(response){
            asteroidData = response;
            console.log(asteroidData);
            
                
            
        })
    }
    }
    angular
    .module("app")
    .factory("SearchService", SearchService);
})();