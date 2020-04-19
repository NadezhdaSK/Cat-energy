var catName = document.querySelector(".form__name");
var catWeight = document.querySelector(".form__control--weight");
var email = document.querySelector(".form__control--mail");
var tel = document.querySelector(".form__control--tel");
var button = document.querySelector(".form__button");

button.addEventListener("click", function(evt) {
  if(catName.value.length < 1) {
    evt.preventDefault();
    catName.classList.add("form__error");
  }
  if(catWeight.value.length < 1) {
    evt.preventDefault();
    catWeight.classList.add("form__error");
  }
  if(email.value.length < 1) {
    evt.preventDefault();
    email.classList.add("form__error");
  }
  if(tel.value.length < 1) {
    evt.preventDefault();
    tel.classList.add("form__error");
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
