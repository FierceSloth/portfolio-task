const sliderEl = document.querySelector(".portfolio__slider");
const sliderLeftEl = document.getElementById("slider-left");
const sliderRightEl = document.getElementById("slider-right");

//? ============================= Centered Slider ===================================

function centeredSlider() {
  sliderEl.scrollLeft = (sliderEl.scrollWidth - sliderEl.clientWidth) / 2;
}

window.addEventListener("load", () => {
  centeredSlider();
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(centeredSlider, 150);
});

//? ============================= Move Slider ===================================

let animLeft;
sliderLeftEl.addEventListener("mouseenter", () => {
  function moveLeft() {
    sliderEl.scrollLeft -= 10;
    animLeft = requestAnimationFrame(moveLeft);
  }
  moveLeft();
});

sliderLeftEl.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animLeft);
});


let animRight;
sliderRightEl.addEventListener("mouseenter", () => {
  function moveRight() {
    sliderEl.scrollLeft += 10;
    animRight = requestAnimationFrame(moveRight);
  }
  moveRight();
});

sliderRightEl.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animRight);
});

