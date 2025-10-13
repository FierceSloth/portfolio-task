const burgerBtnEl = document.querySelector(".header__burger");
const headerNavEl = document.querySelector(".header__nav");
const headerLinksEls = document.querySelectorAll(".list-link");

const bodyEl = document.querySelector("body");

burgerBtnEl.addEventListener("click", () => {
  burgerBtnEl.classList.toggle("active");
  headerNavEl.classList.toggle("active");
  bodyEl.classList.toggle("stop");
});

headerLinksEls.forEach((i) => {
  i.addEventListener("click", () => {
    burgerBtnEl.classList.remove("active");
    headerNavEl.classList.remove("active");
    bodyEl.classList.remove("stop");
  });
});
