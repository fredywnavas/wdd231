const apiKey = "bc9212cfd045a4ea7f476b8f3470febc";
const lat = 37.4323;
const lon = -121.8996;
const units = "imperial";

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

async function getCurrentWeather() {
    try{
        const response = await fetch(currentUrl);
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.error("Error fetching current weather data:", error);
    }
}

function displayCurrentWeather(data) {
    const currentWeatherEl = document.querySelector("#current-weather");
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    currentWeatherEl.innerHTML = `
       <div class="weather-card">
        <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${description}">
        <p class="temp">${temp}&deg;F</p>
        <p class="description">${description}</p>
       </div>
    `;
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error("Error fetching forecast data:", error);
    }
}

function displayForecast(data) {
    const forecastEl = document.querySelector("#forecast");

    // free forecast endpoint returns readings every 3 hours.
    // 40 total covering 5 days.
    // Grabbing the one closest to 12:00 each day gives us a simple
    // 3 day forecast withtout needing to pay daily endpoint.
    const middayReadings = data.list.filter((reading) => reading.dt_txt.includes("12:00:00"));

    const threeDays = middayReadings.slice(0, 3);

    let html = "<h3>3-Day Forecast</h3><div class='forecast-cards'>";

    threeDays.forEach((day) => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        const temp = Math.round(day.main.temp);
        const description = day.weather[0].description;
        const iconCode = day.weather[0].icon;

        html += `
            <div class="forecast-card">
                <p class="day-name>${dayName}</p>
                <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="${description}">
                <p class="temp">${temp}&deg;F</p>
                <p class="description">${description}</p>
            </div>
        `;
    });

    html += "</div>";
    forecastEl.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
    getCurrentWeather();
    getForecast();
});