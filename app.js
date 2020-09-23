// Dropdown Functionality
const menuBtn = document.getElementById('menu-dropdown');
const showDropdown = document.getElementById('mobile-dropdown');

menuBtn.addEventListener('click', () => {
  showDropdown.classList.toggle('show-dropdown');
});

// Image Carousel
const slides = document.querySelectorAll('.single-slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
// console.log(slides); // Comprobamos las 6 slides
slides.forEach((slide, index) => {
  slide.style.left = ` ${index * 100}%`;
});
// Btns
let counter = 0;
nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
});
prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
});
function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
