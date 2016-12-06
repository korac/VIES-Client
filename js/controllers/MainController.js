(function(){
  'use strict'

  angular
      .module('ViesApp')
      .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'VatService'];

  function MainController($scope, VatService){
    var vm              = this;

    vm.companyImg       = "../../../assets/company-icon.png";
    vm.companyInfo      = { name: "", address: "", countryCode: "", vatNumber: "", valid: "", requestDate: ""};
    vm.countries        = [{ code: "HR", country: "Croatia"}, { code: "DE", country: "Germany"}, { code: "FR", country: "France"}, { code: "AT", country: "Austria"}, { code: "UK", country: "UK"}, { code: "SE", country: "Sweden"}];
    vm.infoPresent      = false;
    vm.sendVat          = sendVat;
    vm.title            = "Online VAT number check";
    vm.vat              = { countryCode: "HR", number: ""};

    function sendVat(){
      VatService.requestVatInfo(vm.vat).then(
        function (response){
          console.log(response);
          vm.companyInfo = response;
          vm.infoPresent = true;
        },
        function (response){
          vm.infoPresent = true;
        }
      );
    }

  }
})();
