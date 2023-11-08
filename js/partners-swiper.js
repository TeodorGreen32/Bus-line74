const partners_swiper = new Swiper('.partners-swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: true,
    loop: true,
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
        nextEl: '.section-partners .swiper-button-next',
        prevEl: '.section-partners .swiper-button-prev',
    },

    // And if we need scrollbar

});