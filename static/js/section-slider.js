/*--------------- Section Slider ---------------*/ 
var swiper = new Swiper(".section-slider", {

  spaceBetween: 20, // Space between slides
  loop:true, // Enable looping of slides

  autoplay: {
    delay: 5000, // Delay between slide transitions
    disableOnInteraction: false, // Allow autoplay on user interaction
  },
 
  breakpoints: {
    650: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },

});