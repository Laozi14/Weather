// main.js
import { fetchWeatherData } from './fetchWeather.js';
import { processWeatherData } from './processWeather.js';
import { clearInput, displayError, logWeatherData } from './domHandler.js';

// Select the form and input
const locationForm = document.getElementById('location-form');
const locationInput = document.getElementById('location');

// Add an event listener to the form
locationForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const location = locationInput.value.trim();

    if (!location) {
        displayError('Location input is empty');
        return;
    }

    try {
        const rawWeatherData = await fetchWeatherData(location);
        const processedData = processWeatherData(rawWeatherData);
        logWeatherData(processedData);
    } catch (error) {
        displayError('Unable to fetch and process weather data');
    }

    clearInput(locationInput);
});
