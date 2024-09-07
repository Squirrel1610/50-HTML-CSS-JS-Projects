const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=8d58e4c7ea1a636050b73ef3590520fe&sort_by=popularity.desc";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=8d58e4c7ea1a636050b73ef3590520fe&query=";

const form = document.getElementById("form");
const searchTerm = document.getElementById("search");
const main = document.getElementById("main");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}">

      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate()}">${vote_average}</span>
      </div>

      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;
    main.appendChild(movieElement);
  });
}

const getClassByRate = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTermValue = searchTerm.value;

  if (searchTermValue && searchTermValue !== "") {
    getMovies(SEARCH_API + searchTermValue);
    searchTerm.value = "";
  } else {
    window.location.reload();
  }
});
