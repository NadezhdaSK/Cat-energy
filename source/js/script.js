var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var before = document.querySelector(".example__cat--before");
var after = document.querySelector(".example__cat--after");
var btnBefore = document.querySelector(".example__btn-slider--before");
var btnAfter = document.querySelector(".example__btn-slider--after");
var catName = document.querySelector(".form__name");
var catWeight = document.querySelector(".form__control--weight");
var email = document.querySelector(".form__control--mail");
var tel = document.querySelector(".form__control--tel");
var button = document.querySelector(".form__button");
var formMain = document.querySelector(".form");

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

if(btnAfter && btnBefore) {
  btnBefore.addEventListener("click", function() {
    before.classList.remove("example__cat-dis");
    after.classList.add("example__cat-dis");
  });


  btnAfter.addEventListener("click", function() {
    before.classList.add("example__cat-dis");
    after.classList.remove("example__cat-dis");
  });
}

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
