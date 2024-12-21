let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let header = document.querySelector('header');
let scrollDown = document.querySelector('.scroll-down');
let home = document.querySelector('#home');
let skills = document.querySelector('#skills');
let projects = document.querySelector('#projects');
let contact = document.querySelector('#contact');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.profile-text', { delay: 200, origin: 'top' });
sr.reveal('.profile-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });
sr.reveal('.skills-card', { delay: 500, origin: 'top' });

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('hidden');
        scrollDown.classList.add('visible');
    } else {
        header.classList.remove('hidden');
        scrollDown.classList.remove('visible');
    }
});