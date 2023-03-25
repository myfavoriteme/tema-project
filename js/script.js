let offset = 0; 
const sLine = document.querySelector('.slider-line');
const prev = document.querySelector('.b__prev');
const next = document.querySelector('.b__next');

next.addEventListener('click', function () {
  offset -= 340;
  if (offset < -1020) {
    offset = 0;
  }
  sLine.style.left = offset + 'px';
})

prev.addEventListener('click', function () {
  offset += 340;
  if (offset >= 1020) {
    offset = 0;
  }
  sLine.style.left = offset + 'px';
})