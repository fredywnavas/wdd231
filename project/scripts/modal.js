// Modal dialog that plays the selected movie.
let dialog;
let playerBox;
let titleEl;
let detailsEl;

export function initModal() {
    dialog = document.querySelector('#movie-modal');
    if (!dialog) return;

    playerBox = document.querySelector('#modal-player');
    titleEl = document.querySelector('#modal-title');
    detailsEl = document.querySelector('#modal-details');

    document.querySelector('#close-modal').addEventListener('click', () => dialog.close());

    // Click on the dark backdrop closes the dialog
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
    });

    // Clearing the player stops the video when the dialog closes (also with Esc)
    dialog.addEventListener('close', () => {
        playerBox.innerHTML = '';
    });
}

export function openModal(movie) {
    titleEl.textContent = movie.movieTitle;
    playerBox.innerHTML = buildPlayer(movie);
    detailsEl.innerHTML = `
        ${movie.year} · ${movie.genre.join(', ')} · ${movie.language}<br>
        <a href="${movie.source}" target="_blank" rel="noopener noreferrer">Watch on the original site</a>
    `;
    dialog.showModal();
}

// Turns a "watch" page link into something that can be embedded
export function buildPlayer(movie) {
    const url = new URL(movie.source);
    const host = url.hostname.replace('www.', '');

    if (host === 'youtube.com') {
        const videoId =url.searchParams.get('v');
        return iframe(`https://www.youtube.com/embed/${videoId}`, movie.movieTitle);
    }

    if (host === 'archive.org') {
        const itemId = url.pathname.split('/')[2];
        return iframe(`https://archive.org/embed/${itemId}`, movie.movieTitle);
    }

    // Wikipedia / Wikimedia Commons "File:" pages -> direct file link
    if (url.pathname.includes('/wiki/File:')) {
        const fileName = url.pathname.split('/wiki/File:')[1];
        return video(`https://${url.hostname}/wiki/Special:FilePath/${fileName}`);   
    }

    // Direct video file (for example the library of Congress .mp4)
    return video(movie.source);
}

function iframe(src, title) {
    return `<iframe src="${src}" title="${title}" allow="fullscreen" allowfullscreen loading="lazy"></iframe>`;
}

function video(src) {
    return `<video src="${src}" controls preload="metadata">Your browser does not support the video tag.</video>`;
}