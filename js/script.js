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
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        
        850: {
            slidesPerView: 3,
        },
    },
});
