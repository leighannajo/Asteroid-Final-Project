(function(){
var searchComponent = {
    template:`
    <select name="" id="">
        <option value="">Date</option>
        <option value="">Name</option>
    </select>
    <input ng-model="$ctrl.searchInput"type="text" name="" id="">
    <button ng-click="$ctrl.getSearchData($ctrl.searchInput);">Search</button>
    <ul>
        <li ng-repeat="objects in $ctrl.searchResults">{{objects}}</li>
    </ul>
    `,
    controller:

    function(SearchService) {
        var vm = this;
        vm.searchInput;
        vm.searchResults;
        vm.getSearchData = function(text) {
            console.log(vm.searchInput);
            SearchService.searchName(text)
        .then(function(){
            vm.searchResults = SearchService.getData();
            console.log(vm.searchResults);
          
        })
    }
    }
    
    
};
    angular
    .module("app")
    .component("searchComponent", searchComponent);
})();