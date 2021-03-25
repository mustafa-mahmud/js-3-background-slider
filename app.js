'use strict';

//1::
const sliders = document.querySelectorAll('.slider');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const body = document.body;

let index = 0;

//3::
function next() {
  index++;

  if (index > sliders.length - 1) index = 0;

  /* sliders.forEach((el) => el.classList.remove('active'));
  sliders[index].classList.add('active');
  body.style.backgroundImage = `url(img/${index}.jpg)`;
  sliders[index].style.backgroundImage = `url(img/${index}.jpg)`; */
  slider();
}

//5::
function prev() {
  index--;

  if (index < 0) index = sliders.length - 1;
  slider();
}

//6::
function slider() {
  sliders.forEach((el) => el.classList.remove('active'));
  sliders[index].classList.add('active');
  body.style.backgroundImage = `url(img/${index}.jpg)`;
  sliders[index].style.backgroundImage = `url(img/${index}.jpg)`;
}

//2::
btnNext.addEventListener('click', next);
//4::
btnPrev.addEventListener('click', prev);
