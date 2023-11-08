const swiper = new Swiper('.main-swiper', {
    // Optional parameters
    speed: 800,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.section__main-swiper .swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.section__main-swiper .swiper-button-next',
      prevEl: '.section__main-swiper .swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  });