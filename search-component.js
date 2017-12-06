(function(){
var searchComponent = {
    template:`<div id="search">
    <select name="" id="">
        <option value="">Date</option>
        <option value="">Name</option>
    </select>
    <input ng-model="$ctrl.searchInput"type="text" name="" id="">
    <button ng-click="$ctrl.getSearchData($ctrl.searchInput);">Search</button>
        <div id="container"><div class="asteroid" ng-repeat="objects in $ctrl.displayArray track by $index">{{objects}}</div></div>
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

          vm.searchResults.forEach(function(item) {
            console.log(item);
              vm.asteroidObj = {
                Name : item[0],
                "Close Approach Date": item[3],
                "Closest Distance from Earth": item[4] + "AU",
                "Speed ": item[5] + "km/s",
                "Orbits Around: ": item[10]

              }
              vm.displayArray.push(vm.asteroidObj)
        })
    })
    }
  }


};
    angular
    .module("app")
    .component("searchComponent", searchComponent);
})();
