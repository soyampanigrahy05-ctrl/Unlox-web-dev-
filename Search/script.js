async function getmovie(movieName) {
  let url = `http://www.omdbapi.com/?apikey=ba75c41c&t=${movieName}`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    if (data.Response == "True") {
      const movieContainer = document.getElementById("movieContainer");
      movieContainer.innerHTML = `
            <img src="${data.Poster}" style="width:100%;heigth:100%;">
            <h2>${data.Title}</h2>
            <p>${data.Year}</p>
            <p>${data.Plot}</p>        
            `;
      movieContainer.style.textAlign = "center";
      movieContainer.style.backgroundColor = "pink";
    } else {
      alert("Movie not found");
    }
  } catch (error) {
    console.log("Error Fetching movie", error);
  }
}

function HandleSearch() {
  const movieName = document.getElementById("movieInput").value;
  if (movieName) {
    getmovie(movieName);
  }
}

async function getweather(cityName) {
    let url= `https://api.openweathermap.org/data/2.5/weather?appid=8b2cd6046061acee0821bde41a671208&q={cityName}`;
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        console.log(data);

        if (data.cod === 200) {
            const weatherContainer = document.getElementById("weatherContainer");
            weatherContainer.innerHTML = `
                <h2>${data.name}</h2>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
            `;
        } else {
            alert("City not found: ");
        }
    } catch (error) {
        console.error("Fetch error:", error);
        alert("An error occurred while fetching data.");
    }
}

function handlesearch() {
    const cityName = document.getElementById("cityInput").value;
    if (cityName) {
        getweather(cityName);
    } else {
        alert("Please enter a city name");
    }
}

