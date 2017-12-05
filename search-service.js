(function(){
    function SearchService($http) {
       var asteroidData;
       var arrayLength;
        return {
            searchName: searchName
        };
    
    function searchName() {
        return $http ({
            method: "GET",
            url: "https://api.nasa.gov/neo/rest/v1/neo/browse?size=40&api_key=WJqgdCXy65yXJVQE6Se8wR4TmyDe6SqNONYiN4ef"
        }).then(function(response){
            asteroidData = response;
            arrayLength = asteroidData.data.near_earth_objects.length;
            for(var i = 0;i < arrayLength;i++) {
                console.log(asteroidData.data.near_earth_objects[i].name);
                
            }
        })
    }
    }
    angular
    .module("app")
    .factory("SearchService", SearchService);
})();