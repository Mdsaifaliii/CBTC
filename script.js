const apiKey = "af59438c804c5c14273363574d5a4ce4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    if (data.cod === "404") {
      alert("City not found!");
      return;
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherMain = data.weather[0].main.toLowerCase();
    if (weatherMain === "clouds") {
      weatherIcon.src = "clouds.png";
    } else if (weatherMain === "clear") {
      weatherIcon.src = "clear.png";
    } else if (weatherMain === "rain") {
      weatherIcon.src = "rain.png";
    } else if (weatherMain === "snow") {
      weatherIcon.src = "snow.png";
    } else if (weatherMain === "drizzle") {
      weatherIcon.src = "drizzle.png";
    } else if (weatherMain === "mist") {
      weatherIcon.src = "mist.png";
    } else if (weatherMain === "wind") {
      weatherIcon.src = "wind.png";
    } else {
      weatherIcon.src = "default.png";
    }
    document.querySelector(".weather").style.display = "block";
  } catch (error) {
    console.error("Error fetching weather data: ", error);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
