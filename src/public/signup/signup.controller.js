(function () {
  'use strict';

  angular.module('restaurant')
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['MenuService','menuItems', 'SignUpService'];

  function RegistrationController(MenuService, menuItems, SignUpService) {
    var reg = this;
    var shortNames = [];

    for (var i = 0; i < menuItems.menu_items.length; i++) {
      shortNames.push(menuItems.menu_items[i].short_name.toLowerCase());
    }

    reg.validateFavourite = function () {
      if (reg.user.favmenu !== undefined && reg.user !== undefined) {
        var fav = reg.user.favmenu;

        if (shortNames.indexOf(fav) !== -1) {
          reg.invalidDish = false;
        } else {
          reg.invalidDish = true;
        }

      } else {
        reg.invalidDish = true;
      }
    };

    reg.submit = function () {
      MenuService.getMenuItemsByShortName(reg.user.favmenu).then(function (result) {
        reg.invalidDish = false;
        reg.user.favMenuItem = result;
        SignUpService.saveFavourite(reg.user);

        reg.save = true;
        reg.completed = true;

      }).catch(function (error) {
        reg.invalidDish = true;
        reg.save = false;
        reg.completed = false;
      });

    }

  };

})();
