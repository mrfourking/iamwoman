"use strict";

(function () {
  const ESC_CODE = 27;

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
    if (evt.keyCode === ESC_CODE) {
      closeMenu();
    }
  };

  let onMenuButtonCLick = function () {
    if (mainMenu.classList.contains("hidden")) {
      mainMenu.classList.remove("hidden");
      mainMenuButton.style = "z-index: 100; padding-top: 10px;";
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
