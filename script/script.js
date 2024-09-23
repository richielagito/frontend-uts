let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function nextSlide() {
  slideIndex = (slideIndex + 1) % 3;
  updateSlide();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + 3) % 3;
  updateSlide();
}

function currentSlide(n) {
  slideIndex = n - 1;
  updateSlide();
}

function updateSlide() {
  slides.style.transform = `translateX(-${slideIndex * 100 / 3}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex);
  });
}

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);
