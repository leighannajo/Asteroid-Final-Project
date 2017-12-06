(function(){

  var meterComponent = {
    template: `
    <h1>The End is Near</h1>
    <p>{{$ctrl.objectName}}|{{$ctrl.distanceData}}|{{$ctrl.speedData}}|{{$ctrl.approachTime}}</p>
    `,
    controller:

    function(MeterService) {
      var vm=this;
      vm.distanceData;
      vm.speedData;
      vm.approachTime;
      vm.objectName;

      MeterService.makeRequest().then(function(response) {
        vm.distanceData = Number(response[5]).toFixed(5);
        console.log(vm.distanceData);
        vm.speedData = Number(response[7]).toFixed(5);
        console.log(vm.speedData + "km/s");
        vm.approachTime = response[3];
        console.log(vm.approachTime);
        vm.objectName = response[0];
        console.log(vm.objectName);
      });
    }
  }
  angular
  .module("app")
  .component("meterComponent", meterComponent);
}());
