var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true
    },
    autoplay: {
        delay: 2000
    }
});




var swiper2 = new Swiper(".sale_sec", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay: {
        delay: 2000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

var swiper3 = new Swiper(".product_swip", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay: {
        delay: 2000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});