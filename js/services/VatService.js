(function(){
  'use strict'

  angular
      .module("ViesApp")
      .service("VatService", VatService)

  VatService.$inject = ["$http"];

  function VatService($http){

    this.requestVatInfo = requestVatInfo;

    function requestVatInfo(vat){
      return $http.get('https://morning-tundra-61517.herokuapp.com/vats/' + vat.number).then(
        function successCallback(response){
          console.log("SUCCESS");
          return response.data;
        },
        function errorCallback(response){
          console.log("ERROR");
          console.log(response);
        }
      )
    }

  }

})();
