const slider = document.querySelector('.portfolio__slider');
const container = document.querySelector('.portfolio__slider-container');

container.scrollLeft = (slider.scrollWidth - container.clientWidth) / 2;