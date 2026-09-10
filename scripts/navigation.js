
// Highlight the current page in the navigation menu

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});


    // Hamburger menu toggle

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

    // toggle nav visibility when hamburger is clicked
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

    // Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});