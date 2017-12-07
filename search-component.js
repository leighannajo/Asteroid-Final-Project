(function(){
  var searchComponent = {
    template:`<div class="search">
    <h3>Search Asteroids by Date!</h3>
    <input ng-model="$ctrl.searchInput"type="text" placeholder="yyyy-mm-dd" id="">
    <button ng-click="$ctrl.getSearchData($ctrl.searchInput);">Search</button>
    <div class="container"><div class="asteroid" ng-repeat="objects in $ctrl.displayArray track by $index">{{objects.name}}<br>{{objects.date}}<br>{{objects.distance}}<br>{{objects.speed}}<br>{{objects.orbits}}</div></div>
    </div>
    `,
    controller:

    function(SearchService) {
      var vm = this;
      vm.searchInput;
      vm.searchResults;
      vm.displayArray = [];
      vm.asteroidObj;
      vm.getSearchData = function(text) {
        console.log(vm.searchInput);
        SearchService.searchName(text)
        .then(function(){
          vm.searchResults = SearchService.getData();
          console.log(vm.searchResults);
          vm.displayArray = [];

          vm.searchResults.forEach(function(item) {
            console.log(item);
            vm.asteroidObj = {
              name : item[0],
              date: item[3],
              distance: Number(item[4]).toFixed(3) + "AU",
              speed: Number(item[5]).toFixed(3) + "km/s",
              orbits: item[10]
            }
            vm.displayArray.push(vm.asteroidObj);
          })
        })
      }
    }


  };
  angular
  .module("app")
  .component("searchComponent", searchComponent);
})();
