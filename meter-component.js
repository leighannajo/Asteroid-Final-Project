(function(){

  var meterComponent = {
    template: `
    <div id="meter_container2">
    <h1 class="shake">ARMAGEDDON METER</h1>
    <h2>{{$ctrl.meterName}}<br>{{$ctrl.meterDate}}</h2>
    <div id="background-container">
    <div id="meter_container">
    <div ng-if="$ctrl.display1" id="one" class="risk"></div>
    <div ng-if="$ctrl.display1" id="one1" class="risk"></div>
    <div ng-if="$ctrl.display1" id="one2" class="risk"></div>
    <div ng-if="$ctrl.display2" id="two" class="risk"></div>
    <div ng-if="$ctrl.display2" id="two1" class="risk"></div>
    <div ng-if="$ctrl.display2" id="two2" class="risk"></div>
    <div ng-if="$ctrl.display3" id="three" class="risk"></div>
    <div ng-if="$ctrl.display3" id="three1" class="risk"></div>
    <div ng-if="$ctrl.display3" id="three2" class="risk"></div>
    <div ng-if="$ctrl.display4" id="four" class="risk"></div>
    <div ng-if="$ctrl.display4" id="four1" class="risk"></div>
    <div ng-if="$ctrl.display4" id="four2" class="risk"></div>
    <div ng-if="$ctrl.display5" id="five" class="risk"></div>
    <div ng-if="$ctrl.display5" id="five1" class="risk"></div>
    <div ng-if="$ctrl.display5" id="five2" class="risk"></div>
    <div ng-if="$ctrl.display6" id="six" class="risk"></div>
    <div ng-if="$ctrl.display6" id="six1" class="risk"></div>
    <div ng-if="$ctrl.display6" id="six2" class="risk"></div>
    <div ng-if="$ctrl.display7" id="seven" class="risk"></div>
    <div ng-if="$ctrl.display7" id="seven1" class="risk"></div>
    <div ng-if="$ctrl.display7" id="seven2" class="risk"></div>
    <div ng-if="$ctrl.display8" id="eight" class="risk"></div>
    <div ng-if="$ctrl.display8" id="eight1" class="risk"></div>
    <div ng-if="$ctrl.display8" id="eight2" class="risk"></div>
    <div ng-if="$ctrl.display9" id="nine" class="risk"></div>
    <div ng-if="$ctrl.display9" id="nine1" class="risk"></div>
    <div ng-if="$ctrl.display9" id="nine2" class="risk"></div>
    <div ng-if="$ctrl.display10" id="ten" class="risk"></div>
    <div ng-if="$ctrl.display10" id="ten1" class="risk"></div>
    <div ng-if="$ctrl.display10" id="ten2" class="risk"></div>
    </div>
    </div>
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
      vm.display1 = false;
      vm.display2 = false;
      vm.display3 = false;
      vm.display4 = false;
      vm.display5 = false;
      vm.display6 = false;
      vm.display7 = false;
      vm.display8 = false;
      vm.display9 = false;
      vm.display10 = false;


      MeterService.makeRequest().then(function(risk) {
        console.log(risk);
        if (risk === 1) {
          vm.display1 = true;
        } else if (risk === 2) {
          vm.display1 = true;
          vm.display2 = true;
        } else if (risk === 3) {
          vm.display1 = true;
          vm.display2 = true;
          vm.display3 = true;
        } else if (risk === 4) {
          vm.display1 = true;
          vm.display2 = true;
          vm.display3 = true;
          vm.display4 = true;
        } else if (risk === 5) {
          vm.display1 = true;
          vm.display2 = true;
          vm.display3 = true;
          vm.display4 = true;
          vm.display5 = true;
        } else if (risk === 6) {
          vm.display1 = true;
          vm.display2 = true;
          vm.display3 = true;
          vm.display4 = true;
          vm.display5 = true;
          vm.display6 = true;
        } else if (risk === 7) {
          vm.display1 = true;
          vm.display2 = true;
          vm.display3 = true;
          vm.display4 = true;
          vm.display5 = true;
          vm.display6 = true;
          vm.display7 = true;
        } else if (risk === 8) {
          vm.display1 = true;
          vm.display2 = true;
          vm.display3 = true;
          vm.display4 = true;
          vm.display5 = true;
          vm.display6 = true;
          vm.display7 = true;
          vm.display8 = true;
        } else if (risk === 9) {
          vm.display1 = true;
          vm.display2 = true;
          vm.display3 = true;
          vm.display4 = true;
          vm.display5 = true;
          vm.display6 = true;
          vm.display7 = true;
          vm.display8 = true;
          vm.display9 = true;
        } else if (risk === 10) {
          vm.display1 = true;
          vm.display2 = true;
          vm.display3 = true;
          vm.display4 = true;
          vm.display5 = true;
          vm.display6 = true;
          vm.display7 = true;
          vm.display8 = true;
          vm.display9 = true;
          vm.display10 = true;
        }
        vm.meterDate = MeterService.getMeterData().close_approach_data["0"].close_approach_date;
        vm.meterName = MeterService.getMeterData().name;

      });



    }
  }
  angular
  .module("app")
  .component("meterComponent", meterComponent);
}());
