// fetching, filtering and displaying the movies.

export async function getMovies(url = 'data/movies.json') {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Could not load the movies:', error);
        return null;
    }
}

export function filterMovies(movies, genre) {
    return genre === 'All'
        ? movies
        : movies.filter(movie => movie.genre.includes(genre));
}

export function displayMovies(movieList, grid) {
    if (movieList.length === 0) {
        grid.innerHTML = '<li>No movies found for this genre.</li>';
        return;
    }

    grid.innerHTML = movieList.map((movie) => `
        <li class="movie-card" data-id="${movie.id}">
            <img src="${movie.imageURL}" alt="${movie.movieTitle} poster" width="200" height="300" loading="lazy">
            <h3><button type="button" class="open-movie">${movie.movieTitle}</button></h3>
            <p>${movie.year} · ${movie.genre.join(', ')}</p>
        </li>
    `).join('');
}