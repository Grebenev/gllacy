var button_click = document.querySelector(".contacts__button");
var feedback = document.querySelector(".modal__overlay");
var feedback_close = document.querySelector(".feedback__close");

button_click.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.add("modal__overlay--on");
});
feedback_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.remove("modal__overlay--on");

});
