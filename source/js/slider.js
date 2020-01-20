"use strict";

(function () {
  const SLIDE_NUMBER = 3;
  const SLIDE_CLASS_ACTIVE = "slider__item--active";
  const DESKTOP_WIDTH = 1440;
  const Directions = {
    NEXT: true,
    PREV: false
  };

  let promoBlock = document.querySelector(".promo");
  let sliderItems = promoBlock.querySelectorAll(".slider__item");
  let sliderPictures = promoBlock.querySelectorAll(".slider__item img");
  let sliderBtnLeft = promoBlock.querySelector(".slider__button--left");
  let sliderBtnRight = promoBlock.querySelector(".slider__button--right");
  let sliderCounter = promoBlock.querySelector(".slider__page--current");

  /**
   * Function return the slide with --active class
   * @return {Number} - index of slide with --active class
   */
  let getCurrentSlide = function () {
    return Array.from(sliderItems).findIndex((item) => {
      return item.classList.contains(SLIDE_CLASS_ACTIVE);
    });
  };

  /**
   * The function to switch slides
   * @param {Boolean} direction - direction of slide switch
   */
  let changeSLide = function (direction) {
    let index = getCurrentSlide();

    if (direction) {
      if (index + 1 < SLIDE_NUMBER) {
        sliderItems.forEach((item, i) => {
          if (i === index + 1) {
            item.classList.add(SLIDE_CLASS_ACTIVE);
          } else {
            item.classList.remove(SLIDE_CLASS_ACTIVE);
          }
        });
      } else {
        sliderItems.forEach((item, i) => {
          if (i === 0) {
            item.classList.add(SLIDE_CLASS_ACTIVE);
          } else {
            item.classList.remove(SLIDE_CLASS_ACTIVE);
          }
        });
      }
    } else {
      if (index - 1 >= 0) {
        sliderItems.forEach((item, i) => {
          if (i === index - 1) {
            item.classList.add(SLIDE_CLASS_ACTIVE);
          } else {
            item.classList.remove(SLIDE_CLASS_ACTIVE);
          }
        });
      } else {
        sliderItems.forEach((item, i) => {
          if (i === SLIDE_NUMBER - 1) {
            item.classList.add(SLIDE_CLASS_ACTIVE);
          } else {
            item.classList.remove(SLIDE_CLASS_ACTIVE);
          }
        });
      }
    }

    if (document.body.clientWidth < DESKTOP_WIDTH) {
      promoBlock.style.backgroundImage = "url('" + sliderPictures[getCurrentSlide()].currentSrc + "')";
    } else {
      promoBlock.style.backgroundImage = "url('../img/slide-" + (getCurrentSlide() + 1) + "-bg-desktop.jpg')";
    }
    sliderCounter.textContent = "0" + (getCurrentSlide() + 1) + "/";
  };

  let onSlideButtonClick = function (direction) {
    return function () {
      changeSLide(direction);
    };
  };

  sliderBtnLeft.addEventListener("click", onSlideButtonClick(Directions.PREV), false);
  sliderBtnRight.addEventListener("click", onSlideButtonClick(Directions.NEXT), false);
})();
