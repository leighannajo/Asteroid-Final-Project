(function(){

  var meterComponent = {
    template: `
    <h1>The End is Near</h1>
    <div meter-directive id="meter_container">
    <div id="one" class="risk"></div>
    <div id="two" class="risk"></div>
    <div id="three" class="risk"></div>
    <div id="four" class="risk"></div>
    <div id="five" class="risk"></div>
    <div id="six" class="risk"></div>
    <div id="seven" class="risk"></div>
    <div id="eight" class="risk"></div>
    <div id="nine" class="risk"></div>
    <div id="ten" class="risk"></div>
    </div>
    `,
    controller:

    function(MeterService) {
      var vm=this;
      vm.distanceData;
      vm.speedData;
      vm.approachTime;
      vm.objectName;
      vm.risk;


      MeterService.makeRequest().then(function(risk) {

        console.log(risk);
        vm.risk = risk;
      });
    }
  }
  angular
  .module("app")
  .component("meterComponent", meterComponent);
}());
