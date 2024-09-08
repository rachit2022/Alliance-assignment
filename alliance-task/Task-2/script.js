$(document).ready(function () {
  let currentSlide = 0;
  const slides = $(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.hide();
    slides.eq(index).show();
  }

  // Initial display
  showSlide(currentSlide);

  // Slider automatic transition
  setInterval(function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 3000);
});
