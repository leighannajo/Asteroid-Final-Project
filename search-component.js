(function(){
var searchComponent = {
    template:
    `
    <select name="" id="">
        <option value="">Date</option>
        <option value="">Name</option>
    </select>
    <input ng-model="$ctrl.searchInput"type="text" name="" id="">
    <button ng-click="$ctrl.getSearchData($ctrl.searchInput);">Search</button>
    `,
    controller:

    function(SearchService) {
        var vm = this;
        vm.searchInput;
        vm.getSearchData = function(text) {
            console.log(vm.searchInput);
            SearchService.searchName(text);
        }

    }
};
    angular
    .module("app")
    .component("searchComponent", searchComponent);
})();