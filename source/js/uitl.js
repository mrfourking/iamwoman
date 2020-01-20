"use strict";

(function () {
  const ESC_KEYCODE = 27;
  const DISPLAY_WIDTH = 1440;

  window.util = {
    isEscPressed(evt) {
      return evt.keyCode === ESC_KEYCODE;
    },
    DISPLAY_WIDTH
  };
})();
