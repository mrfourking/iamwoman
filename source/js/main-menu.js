"use strict";

(function () {
  let mainMenu = document.querySelector(".main-menu");
  let mainMenuButton = document.querySelector(".header__menu-button");
  let closeMenuButton = document.querySelector(".main-menu__close-button");

  let closeMenu = function () {
    mainMenu.classList.add("hidden");
    mainMenuButton.removeAttribute("style");
    document.removeEventListener("keydown", onEscKeydown);
    closeMenuButton.removeEventListener("click", onCloseButtonClick);
  };

  let onEscKeydown = function (evt) {
    if (window.util.isEscPressed(evt)) {
      closeMenu();
    }
  };

  let onMenuButtonCLick = function () {
    if (mainMenu.classList.contains("hidden")) {
      mainMenu.classList.remove("hidden");
      if (document.body.clientWidth < window.util.DISPLAY_WIDTH) {
        mainMenuButton.style = "z-index: 100; padding-top: 10px;";
      } else {
        mainMenuButton.style = "z-index: 100;";
      }
      document.addEventListener("keydown", onEscKeydown);
      closeMenuButton.addEventListener("click", onCloseButtonClick);
    } else {
      closeMenu();
    }
  };

  let onCloseButtonClick = function () {
    closeMenu();
  };

  mainMenuButton.addEventListener("click", onMenuButtonCLick);
})();
