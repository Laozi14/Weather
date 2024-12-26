// domHandler.js
export function clearInput(inputElement) {
    inputElement.value = '';
}

export function displayError(message) {
    alert(message);
}

export function updateWeatherUI(data) {
    const weatherOutput = document.getElementById('weather-output');
    const locationName = document.getElementById('location-name');
    const currentWeather = document.getElementById('current-weather');
    const forecast = document.getElementById('forecast');

    // Update the location name
    locationName.textContent = `Weather in ${data.location}`;

    // Update current weather
    currentWeather.innerHTML = `
        <div class="weather-card">
            <div>
                <strong>Current:</strong> ${data.current.conditions}
                <br>
                <strong>Temp:</strong> ${data.current.temperature}°C
                <br>
                <strong>Wind:</strong> ${data.current.windSpeed} km/h
                <br>
                <strong>Humidity:</strong> ${data.current.humidity}%
            </div>
            <img src="https://www.visualcrossing.com/img/${data.current.icon}.png" alt="${data.current.conditions}" width="50">
        </div>
    `;

    // Update daily forecast
    forecast.innerHTML = data.daily.map(day => `
        <div class="weather-card">
            <div>
                <strong>${day.date}</strong>
                <br>
                ${day.conditions}
                <br>
                <strong>High:</strong> ${day.temperatureMax}°C
                <br>
                <strong>Low:</strong> ${day.temperatureMin}°C
            </div>
            <img src="https://www.visualcrossing.com/img/${day.icon}.png" alt="${day.conditions}" width="50">
        </div>
    `).join('');

    // Make the weather output section visible
    weatherOutput.style.display = 'block';
}
