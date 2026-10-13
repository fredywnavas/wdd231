import { initTheme } from './theme.js';
import { initNav } from './nav.js';
import { getMovies, filterMovies, displayMovies } from './movies.js';
import { initModal, openModal } from './modal.js';

// runs on every page
initTheme();
initNav();

// runs only on the page that has the movie grid (index.html)
const grid = document.querySelector('.movie-grid');
if (grid) { 
    initMovieBrowser(grid);
}

async function initMovieBrowser(movieGrid) {
    initModal();

    const movies = await getMovies();
    if (!movies) {
        movieGrid.innerHTML = '<li>Sorry, the movies could not be loaded. Please try again later.</li>';
        return;
    }

    displayMovies(movies, movieGrid);

    const genreLinks = document.querySelectorAll('#main-nav a');
    genreLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            genreLinks.forEach((item) => item.classList.remove('active'));
            link.classList.add('active');
            displayMovies(filterMovies(movies, link.dataset.genre), movieGrid);
        });
    });

    // One listener for all cards (works after every re-render)
    movieGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.movie-card');
        if (!card) return;
        const movie = movie.find((item) => item.id === Number(card.dataset.id));
        if (movie) openModal(movie);
    });
}