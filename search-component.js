(function(){
  var searchComponent = {
    template:`<div class="search">
    <h3>Search Asteroids by Date!</h3>
    <form>
    <datepicker id="datepicker" date-format="yyyy-MM-dd" ng-model="$ctrl.searchInput">
    <input ng-model="$ctrl.searchInput" type="text" placeholder="yyyy-mm-dd">
    <button ng-click="$ctrl.getSearchData($ctrl.searchInput);">Search</button>
    </datepicker>
    </form>
    <div class="container"><div incom-directive class="asteroid" ng-repeat="objects in $ctrl.displayArray track by $index">{{objects.name}}<br>{{objects.date}}<br>{{objects.distance}}<br>{{objects.speed}}<br>{{objects.orbits}}</div></div>
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
          vm.displayArray = [];

          vm.searchResults.forEach(function(item) {
            vm.asteroidObj = {
              name : "Name: " + item[0],
              date: "Date: " + item[3],
              distance: "Distance: " + Number(item[4]).toFixed(10) + " AU",
              speed: "Speed: " + Number(item[5]).toFixed(3) + " km/s",
              orbits: "Orbiting Body: " + item[10]
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
