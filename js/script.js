// BURGER MENU

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
);

// TESTIMONIALS SLIDERS

const swiper = new Swiper('.slide-content', {
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
        990: {
            slidesPerView: 3,
            spaceBetween: -100,
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: -240,
        },

        1400: {
            slidesPerView: 3,
            spaceBetween: -540,
        },
    },
});
