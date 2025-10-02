const popupEl = document.getElementById("popup");
const popupCloseEl = document.querySelector(".popup__close");
const overlayPopupEl = document.querySelector(".popup__overlay");
const priceButtonsEls = document.querySelectorAll(".card__btn-popup");

priceButtonsEls.forEach((button) => {
  button.addEventListener("click", () => {
    popupEl.classList.add("active");
    overlayPopupEl.classList.add("active");
    bodyEl.classList.add("stop");
  });
});

popupCloseEl.addEventListener("click", () => {
  popupEl.classList.remove("active");
  overlayPopupEl.classList.remove("active");
  bodyEl.classList.remove("stop");
});
overlayPopupEl.addEventListener("click", () => {
  popupEl.classList.remove("active");
  overlayPopupEl.classList.remove("active");
  bodyEl.classList.remove("stop");
});
