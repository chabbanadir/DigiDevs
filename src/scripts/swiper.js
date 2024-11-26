import Swiper from 'swiper';


document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Debugging: Check if buttons are detected
  console.log('Next button:', swiper.navigation.nextEl); // Should log the next button element
  console.log('Previous button:', swiper.navigation.prevEl); // Should log the prev button element
});
document.querySelector('.swiper-button-next').addEventListener('click', () => {
  console.log('Next button clicked');
  const swiper = document.querySelector('.swiper-container').swiper;
  swiper.slideNext(); // Manually navigate to the next slide
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
  console.log('Previous button clicked');
  const swiper = document.querySelector('.swiper-container').swiper;
  swiper.slidePrev(); // Manually navigate to the previous slide
});
