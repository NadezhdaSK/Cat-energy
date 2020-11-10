var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var catName = document.querySelector(".form__name");
var catWeight = document.querySelector(".form__control--weight");
var email = document.querySelector(".form__control--mail");
var tel = document.querySelector(".form__control--tel");
var button = document.querySelector(".form__button");
var formMain = document.querySelector(".form");

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

var before = document.querySelector(".example__cat-box--before");
var after = document.querySelector(".example__cat-box--after");
var btnBefore = document.querySelector(".example__btn-slider--before");
var btnAfter = document.querySelector(".example__btn-slider--after");
var slider = document.querySelector(".example__scale");
var boxSlider = document.querySelector(".example__slider");
var blockExample = document.querySelector(".example__block");


if (slider) {
  slider.oninput = function() {
    var sliderValuePercent = +this.value;
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
      var gradientCat = (blockExample.offsetWidth / 2) - 67 + ((100 - sliderValuePercent) * 6.9) + 'px';
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
      var gradientCat = (blockExample.offsetWidth / 2) - 67 + (100 * 6.9) + 'px';
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
      var gradientCat = (blockExample.offsetWidth / 2) - 67 + 'px';
      blockExample.style.background = 'linear-gradient(to right, #f2f2f2 ' + gradientCat + ', #eaeaea ' + gradientCat;
    }
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
