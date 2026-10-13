// DOM SELECTTORS AND EVENT LISTENERS
//~~ const menuButton = document.querySelector("#menu-button");
//~~ const nav = document.querySelector("nav");
const themeToggle = document.querySelector('#theme-toggle');

/* ~~~
menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }
});
~~~ */

// MOBILE VIEW HAMBURGER BUTTON
const hamburger = document.querySelector('.hamburger');
const linkNavList = document.querySelector('#link-nav ul');

hamburger.addEventListener('click', () => {
    linkNavList.classList.toggle('open');
});





document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // remove active from all links and add clicked one
    document.querySelectorAll('#main-nav a').forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');

    const genre = e.target.dataset.genre;
    const filtered = genre === 'All'
      ? movies
      : movies.filter(movie => movie.genre.includes(genre));

    displayMovies(filtered);
  });
});

// Dark / Light Mode Theme TOGGLE. ##### localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    }
});

/* 
ARRAY OF MOVIES

        movieTitle: "",
        genre: [],
        year: 1970,
        language: "english",
        imageURL: "",
        source: ""

*/

const movies = [
    {
        movieTitle: "Mr. Bug Goes To Town",
        genre: ["Animation"],
        year: 1941,
        language: "english",
        imageURL: "images/posters/1941-mr-bug-goes-to-town.webp",
        source: "https://www.youtube.com/watch?v=z-1b_B96P1Y"
    },
    {
        movieTitle: "The Hitch-Hiker",
        genre: ["Thriller", "Horror"],
        year: 1953,
        language: "english",
        imageURL: "images/posters/1953-the-hitch-hiker.webp",
        source: "https://tile.loc.gov/storage-services/service/mbrs/ntscrm/00047382/00047382.mp4"
    },
    {
        movieTitle: "Fantastic Planet",
        genre: ["Sci-Fi", "Animation"],
        year: 1973,
        language: "english",
        imageURL: "images/posters/1973-fantastic-planet.webp",
        source: "https://archive.org/details/fantastic-planet__1973"
    },
    {
        movieTitle: "The Last Man on Earth",
        genre: ["Sci-Fi", "Horror"],
        year: 1964,
        language: "english",
        imageURL: "images/posters/1964-the-last-man-on-earth.webp",
        source: "https://archive.org/details/the-last-man-on-earth-1964-by-ubaldo-ragona-and-sidney-salkow"   
    },
    {
        movieTitle: "Charade",
        genre: ["Comedy", "Romantic"],
        year: 1963,
        language: "english",
        imageURL: "images/posters/1963-charade.webp",
        source: "https://en.wikipedia.org/wiki/File:Charade_(Stanley_Donen,_1963).webm"
    },
    {
        movieTitle: "The Little Shop of Horrors",
        genre: ["Comedy", "Horror"],
        year: 1960,
        language: "english",
        imageURL: "images/posters/1960-little-shop.webp",
        source: "https://commons.wikimedia.org/wiki/File:The_Little_Shop_of_Horrors_(1960)_by_Roger_Corman.webm"
    },
    {
        movieTitle: "Teenagers from Outer Space",
        genre: ["Sci-Fi"],
        year: 1959,
        language: "english",
        imageURL: "images/posters/1959-teenagers-from-outer-space.webp",
        source: "https://archive.org/details/horror-sci-fi-thriller-movie-teenagers-from-outer-space-1959"
    },
    {
        movieTitle: "Jack and the Beanstalk",
        genre: ["Comedy", "Fantasy"],
        year: 1952,
        language: "english",
        imageURL: "images/posters/1952-jack-and-the-beanstalk.webp",
        source: "https://en.wikipedia.org/wiki/File:Jack_and_the_Beanstalk_(1952).webm"
    },
    {
        movieTitle: "Vengeance Valley",
        genre: ["Drama", "Western"],
        year: 1951,
        language: "english",
        imageURL: "images/posters/1951-vengeance-valley.webp",
        source: "https://www.youtube.com/watch?v=CAdygNgLGW0"
    },
    {
        movieTitle: "Cyrano de Bergerac",
        genre: ["Comedy", "Adventure"],
        year: 1950,
        language: "english",
        imageURL: "images/posters/1950-cyrano-de-bergerac.webp",
        source: "https://en.wikipedia.org/wiki/File:Cyrano_de_Bergerac_(1950).webm"
    },
    {
        movieTitle: "Jerky Turkey",
        genre: ["Animation"],
        year: 1945,
        language: "english",
        imageURL: "images/posters/1945-jerky-turkey.webp",
        source: "https://www.youtube.com/watch?v=MJ_EDzA6yJk"
    },
    {
        movieTitle: "Pigs in a Polka",
        genre: ["Animation"],
        year: 1943,
        language: "english",
        imageURL: "images/posters/1943-pigs-in-a-polka.webp",
        source: "https://en.wikipedia.org/wiki/File:Pigs_in_a_Polka_LTGC.webm"
    },
    {
        movieTitle: "A Tale of Two Kitties",
        genre: ["Animation"],
        year: 1942,
        language: "english",
        imageURL: "images/posters/1942-a-tale-of-two-kitties.webp",
        source: "https://en.wikipedia.org/wiki/File:A_Tale_of_Two_Kitties_190612_LTPC.webm"
    },
    {
        movieTitle: "The Dover Boys at Pimento University",
        genre: ["Animation"],
        year: 1942,
        language: "english",
        imageURL: "images/posters/1942-the-dover-boys-at-pimento-university.webp",
        source: "https://archive.org/details/the-dover-boys-at-pimento-university-1942-hd-blu-ray-remux"
    },
    {
        movieTitle: "Fox Pop",
        genre: ["Animation"],
        year: 1942,
        language: "english",
        imageURL: "images/posters/1942-fox-pop.webp",
        source: "https://en.wikipedia.org/wiki/File:Chuck_Jones_-_Merrie_Melodies_-_Fox_Pop_(1942)_(restored_HD_version)_(2).webm"
    },
    {
        movieTitle: "The Wabbit Who Came To Supper",
        genre: ["Animation"],
        year: 1942,
        language: "english",
        imageURL: "images/posters/1942-the-wabbit-who-came-to-supper.webp",
        source: "https://www.youtube.com/watch?v=NmrBmzt0kvE"
    },
    {
        movieTitle: "The Ducktators",
        genre: ["Animation"],
        year: 1942,
        language: "english",
        imageURL: "images/posters/1942-the-ducktators.webp",
        source: "https://en.wikipedia.org/wiki/File:The_Ducktators_190611_LTGC.webm"
    },
    {
        movieTitle: "Pantry Panic",
        genre: ["Animation"],
        year: 1941,
        language: "english",
        imageURL: "images/posters/1941-pantry-panic.webp",
        source: "https://en.wikipedia.org/wiki/File:Pantry_Panic.webm"
    },
    {
        movieTitle: "The Spring",
        genre: ["Animation"],
        year: 1936,
        language: "english",
        imageURL: "images/posters/1936-the-spring.webp",
        source: "https://en.wikipedia.org/wiki/File:To_Spring_(1936).webm"
    },
    {
        movieTitle: "Superman - Jungle Drums",
        genre: ["Animation"],
        year: 1943,
        language: "english",
        imageURL: "images/posters/1943-jungle-drums.webp",
        source: "https://www.youtube.com/watch?v=n2LUJQgfhcI"
    },
];

// FUNCTION TO DISPLAY THE CARDS
function displayMovies(movieList) {
    const grid = document.querySelector('#movie-grid');
    grid.innerHTML = movieList.map(movie => `
        <div class="movie-card" data-genre="${movie.genre.join(' ')}">
            <img src="${movie.imageURL}" alt="${movie.movieTitle} poster" loading="lazy">
            <h3>${movie.movieTitle}</h3>
            <p>${movie.year || 'N/A'} · ${movie.genre.join(', ')}</p>
        </div>
    `).join('');
}

// CALL IT WHEN THE PAGE LOADS AND ON NAV CLICKS

// Show all movies on load
displayMovies(movies);

// Filter on nav click
document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const genre = e.target.dataset.genre;
        const filtered = genre === 'home'
          ? movies
          : movies.filter(movies => movie.genre.includes(genre));
        displayMovies(filtered);
    });
});