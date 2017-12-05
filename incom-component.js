(function(){
    var incomComponent = {
        template:`
        <ul>
        <li ng-repeat="objects in $ctrl.incomData">{{objects}}</li>
    </ul>
        `,
        controller:
        
        function(IncomService) {
            var vm = this;
            vm.incomData;
        IncomService.startIncom().then(function(){
            vm.incomData = IncomService.getData();
            
        })
        }


    };
    angular
    .module("app")
    .component("incomComponent", incomComponent);
})();