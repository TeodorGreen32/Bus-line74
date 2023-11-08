const work_swiper = new Swiper('.work-swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 15,   
    loop: true,
    speed: 800,
    breakpoints: {
        // when window width is >= 320px
        640: {
            slidesPerView: 3,
            spaceBetween: 15,
        }
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.section-work-slider .swiper-button-next',
        prevEl: '.section-work-slider .swiper-button-prev',
    },
    

    // And if we need scrollbar

});
;