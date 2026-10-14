// Hamburger menu (small screen) and wayfinding for the main links
export function initNav() {
    const hamburger = document.querySelector('.hamburger');
    const linkList = document.querySelector('#link-nav ul');

    if (hamburger && linkList) {
        hamburger.addEventListener('click', () => {
            const isOpen = linkList.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });
    }

    // Wayfinding: mark the link that matches the current page.
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#link-nav a').forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
            link.setAttribute('aria-current', 'page');
        }
    });
}