(function() {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['SignUpService', 'ApiPath']

  function MyInfoController(SignUpService, ApiPath) {
    var $ctrl = this;

    $ctrl.userDetails = SignUpService.getFavourite();
    $ctrl.basePath = ApiPath;
  };

})();
