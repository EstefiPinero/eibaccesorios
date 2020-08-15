
let nav = document.querySelector('.nav-menu');

document.querySelector('.menu-btn').addEventListener('click', () => {
    
    nav.classList.toogle('show');
    
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 800});
ScrollReveal().reveal('.cards-brands', { delay: 800});