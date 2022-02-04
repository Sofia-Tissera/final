const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
    });
});