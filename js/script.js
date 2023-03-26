let offset = 0; 
const sliders = document.querySelectorAll('.slide');
const sLine = document.querySelector('.slider-line');
const prev = document.querySelector('.b__prev');
const next = document.querySelector('.b__next');

const sStyles = window.getComputedStyle(document.querySelector('.slide')); 
const w = document.querySelector('.slide').offsetWidth;
const marg = Number(sStyles.marginRight.slice(0, -2));
function init() {
  const w = document.querySelector('.slide').offsetWidth;
  console.log(w)
  console.log(w*sliders.length)
  console.log(marg)
  // sLine.style.width = w * sliders.length + 160 + 'px';
  // sliders.forEach(e => {
  //   e.style.width = w + 'px';
  // });
}

init();

next.addEventListener('click', function () {
  
  offset -= w + (marg * 2);
  if (offset < -w * sliders.length){
    offset = 0;
  }
  sLine.style.left = offset + 'px';
})

prev.addEventListener('click', function () {
  offset += w + (marg * 2);
  if (offset > 0) {
    offset = -w * sliders.length + (sliders.length * marg * 2);
  }
  sLine.style.left = offset + 'px';
})



