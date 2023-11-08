const autopark_swiper = new Swiper('.autopark-swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 15,   
    loop: true,
    speed: 800,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.section-autopark .swiper-button-next',
        prevEl: '.section-autopark .swiper-button-prev',
    },

    // And if we need scrollbar

});