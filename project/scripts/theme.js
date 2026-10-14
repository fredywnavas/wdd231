// Dark / light theme toggle. The choice is saved in localStorage.

const STORAGE_KEY = 'theme';

export function initTheme() {
    const toggle = document.querySelector('#theme-toggle');
    if (!toggle) return;

    const applyTheme = (isDark) => {
        document.body.classList.toggle('dark', isDark);
        toggle.textContent = isDark ? '☀️' : '🌙';
        toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    };

    applyTheme(localStorage.getItem(STORAGE_KEY) === 'dark');

    toggle.addEventListener('click', () => {
        const isDark = !document.body.classList.container('dark')
        localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
        applyTheme(isDark);
    });
}