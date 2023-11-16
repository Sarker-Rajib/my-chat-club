var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: true,
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: 2,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});