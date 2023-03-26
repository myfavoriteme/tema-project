let offset = 0; 
const sliders = document.querySelectorAll('.slide');
const sLine = document.querySelector('.slider-line');
const prev = document.querySelector('.b__prev');
const next = document.querySelector('.b__next');
const screenWidth = window.innerWidth;

let slideWidth = 745;

let margin = 40;
let slidersNum = sliders.length;
console.log(slidersNum)


if (screenWidth >= 1280) {
  slideWidth = 745;
  // lineWidth = 5495;
  margin = 40;
}
if (screenWidth < 1280) {
  slideWidth = 600;
  // lineWidth = 4480;
}
if(screenWidth <= 768){
  slideWidth = 290;
  margin = 10;
  // lineWidth = 2120;
}

let lineWidth = (slidersNum - 1) * (margin + slideWidth);

const sStyles = window.getComputedStyle(document.querySelector('.slide')); 
// const w = document.querySelector('.slide').offsetWidth;
// const marg = Number(sStyles.marginRight.slice(0, -2));
function init() {
  const w = document.querySelector('.slide').offsetWidth;
  console.log(w)
  console.log(w*sliders.length)
  // console.log(marg)
  // sLine.style.width = w * sliders.length + 160 + 'px';
  // sliders.forEach(e => {
  //   e.style.width = w + 'px';
  // });
}

init();

next.addEventListener('click', function () {
  
  offset -= slideWidth + margin;
  if (offset < -lineWidth){
    offset = 0;
  }
  sLine.style.left = offset + 'px';
})

prev.addEventListener('click', function () {
  offset += slideWidth + margin;
  if (offset > 0) {
    offset = -lineWidth;
  }
  sLine.style.left = offset + 'px';
})



// BURGER

const burger = document.querySelector('.burger');
const body = document.querySelector('.body');
const overlay = document.querySelector('.overlay_b');
const bMenu = document.querySelector('.burger-menu');
const menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function openMenu(){
  body.classList.toggle('body-hiden');
  overlay.classList.toggle('overlay-on');
  bMenu.classList.toggle('transform-left');
  bMenu.classList.toggle('transform-right');
  bMenu.classList.add('block');
  bMenu.classList.toggle('right');
  bMenu.classList.toggle('left');
  console.log('1');
})

overlay.onclick = function () {
  console.log('22');
  closeMenu();
}

menuLinks.forEach(e=>e.addEventListener('click', function() {
  closeMenu()
}))

function closeMenu() {
  body.classList.remove('body-hiden');
  overlay.classList.remove('overlay-on');
  bMenu.classList.remove('transform-left');
  bMenu.classList.add('transform-right');
  bMenu.classList.add('block');
  bMenu.classList.remove('right');
  bMenu.classList.add('left');
}