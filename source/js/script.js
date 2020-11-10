"use strict";

let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
let catName = document.querySelector(".form__name");
let catWeight = document.querySelector(".form__control--weight");
let email = document.querySelector(".form__control--mail");
let tel = document.querySelector(".form__control--tel");
let button = document.querySelector(".form__button");
let formMain = document.querySelector(".form");

// меню навигации

if (navMain) {
  navMain.classList.remove("main-nav--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.remove("main-nav--opened");
      navMain.classList.add("main-nav--closed");
    }
  });
}

// Слайдер на главной странице

let before = document.querySelector(".example__cat-box--before");
let after = document.querySelector(".example__cat-box--after");
let btnBefore = document.querySelector(".example__btn-slider--before");
let btnAfter = document.querySelector(".example__btn-slider--after");
let slider = document.querySelector(".example__scale");
let boxSlider = document.querySelector(".example__slider");
let blockExample = document.querySelector(".example__block");


if (slider) {
  slider.oninput = function() {
    let sliderValuePercent = +this.value;
    after.style.width = sliderValuePercent + '%';
    before.style.width = (100 - sliderValuePercent) + '%';

    if (window.matchMedia("(min-width: 758px)").matches && window.matchMedia("(max-width: 1299px)").matches) {
      boxSlider.style.background =
      'linear-gradient(to right, #f2f2f2 ' +
      (100 - sliderValuePercent) +
      '%, #eaeaea ' +
      (100 - sliderValuePercent) +
      '%';
    }

    if (window.matchMedia("(min-width: 1300px)").matches) {
      let gradientCat = (blockExample.offsetWidth / 2) - 67 + ((100 - sliderValuePercent) * 6.9) + 'px';
      blockExample.style.background = 'linear-gradient(to right, #f2f2f2 ' + gradientCat + ', #eaeaea ' + gradientCat;
    }
  };
}

if(btnAfter && btnBefore) {
  btnBefore.addEventListener("click", function() {
    slider.value = 0;
    before.style.width = '100%';
    after.style.width = '0%';

    if (window.matchMedia("(min-width: 758px)").matches && window.matchMedia("(max-width: 1299px)").matches) {
      boxSlider.style.background = 'linear-gradient(to right, #f2f2f2 100%, #eaeaea 100%';
    }

    if (window.matchMedia("(min-width: 1300px)").matches) {
      let gradientCat = (blockExample.offsetWidth / 2) - 67 + (100 * 6.9) + 'px';
      blockExample.style.background = 'linear-gradient(to right, #f2f2f2 ' + gradientCat + ', #eaeaea ' + gradientCat;
    }
  });

  btnAfter.addEventListener("click", function() {
    slider.value = 100;
    before.style.width = '0%';
    after.style.width = '100%';

    if (window.matchMedia("(min-width: 758px)").matches && window.matchMedia("(max-width: 1299px)").matches) {
      boxSlider.style.background = 'linear-gradient(to right, #f2f2f2 0%, #eaeaea 0%';
    }

    if (window.matchMedia("(min-width: 1300px)").matches) {
      let gradientCat = (blockExample.offsetWidth / 2) - 67 + 'px';
      blockExample.style.background = 'linear-gradient(to right, #f2f2f2 ' + gradientCat + ', #eaeaea ' + gradientCat;
    }
  });
}

// Показать больше товаров в каталоге

let catalogPlus = document.querySelector('.catalog__plus');
let catalogMore = document.querySelector('.catalog__to-all');
let product = document.querySelectorAll('.product');

if (product) {
  catalogPlus.addEventListener('click', (e) => {
    e.preventDefault();
    product.forEach(item => {
      item.classList.remove('product-hide');
    });
  });

  catalogMore.addEventListener('click', (e) => {
    e.preventDefault();
    product.forEach(item => {
      item.classList.remove('product-hide');
    });
  });
}

// Ошибки формы

if(formMain) {
  formMain.addEventListener("submit", function(evt) {
    if(!catName.value || !catWeight.value || !email.value || !tel.value) {
      evt.preventDefault();
    }
    if(catName.value.length < 1) {
      catName.classList.add("form__error");
    }
    if(catWeight.value.length < 1) {
      catWeight.classList.add("form__error");
    }
    if(email.value.length < 1) {
      email.classList.add("form__error");
    }
    if(tel.value.length < 1) {
      tel.classList.add("form__error");
    }
    if(catName.value.length < 1) {
      catName.focus();
    } else if(catWeight.value.length < 1) {
      catWeight.focus();
    } else if(email.value.length < 1) {
      email.focus();
    } else if(tel.value.length < 1) {
      tel.focus();
    }
  });

  catName.addEventListener("blur", function() {
    if(catName.value.length >= 1) {
      catName.classList.remove("form__error");
    }
  });

  catWeight.addEventListener("blur", function() {
    if(catWeight.value.length >= 1) {
      catWeight.classList.remove("form__error");
    }
  });

  email.addEventListener("blur", function() {
    if(email.value.length >= 1) {
      email.classList.remove("form__error");
    }
  });

  tel.addEventListener("blur", function() {
    if(tel.value.length >= 1) {
      tel.classList.remove("form__error");
    }
  });
}
