var before = document.querySelector(".example__cat--before");
var after = document.querySelector(".example__cat--after");
var btnBefore = document.querySelector(".example__btn-slider--before");
var btnAfter = document.querySelector(".example__btn-slider--after");

btnBefore.addEventListener("click", function() {
  before.classList.remove("example__cat-dis");
  after.classList.add("example__cat-dis");
});

btnAfter.addEventListener("click", function() {
  before.classList.add("example__cat-dis");
  after.classList.remove("example__cat-dis");
});
