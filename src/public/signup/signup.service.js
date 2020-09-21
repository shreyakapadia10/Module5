(function() {
  'use strict';

  angular.module('public')
  .service('SignUpService', SignUpService);

  function SignUpService() {
    var service = this;
    var userDetails;

    service.saveFavourite = function (user) {
      service.userDetails = user;
    };

    service.getFavourite = function () {
      return service.userDetails;
    };

  };

})();
