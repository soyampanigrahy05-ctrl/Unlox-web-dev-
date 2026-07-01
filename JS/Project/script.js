const API_KEY = "";
const buttons = document.querySelectorAll("button");
const moviescontainer = document.getElementById("movies-container");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const mood = button.dataset.mood;
    fetchmovie(mood);
  });

  async function fetchmovie(movieName) {
    moviescontainer.innerHTML = "<h2>Loading.....</h2>";

    const url = `http://www.omdbapi.com/?apikey=ba75c41c&s=${movieName}`;
    const resposne = await fetch(url);
    const data = await resposne.json();
    displaymovie(data.Search);
  }

  function displaymovie(movies) {
    moviescontainer.innerHTML = "";
    movies.forEach(movie => {
      const card = document.createElement("div");
      card.classList.add("movie-card");
      card.innerHTML = `
        <img src="${movie.Poster}">
        <div class="movie-info">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        </div>
        `;
      moviescontainer.appendChild(card);
    });
  }
});
