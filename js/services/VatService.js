(function(){
  'use strict'

  angular
      .module("ViesApp")
      .service("VatService", VatService)

  VatService.$inject = ["$http"];

  function VatService($http){

    this.requestVatInfo = requestVatInfo;

    function requestVatInfo(vat){
      console.log("u servisu smo");
      console.log(vat);
      return $http.get('http://localhost:8080/vats/' + vat.number).then(
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
