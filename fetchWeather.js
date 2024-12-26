// fetchWeather.js
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
const API_KEY = 'YOUR_API_KEY'; // Replace with your API key

export async function fetchWeatherData(location) {
    try {
        const url = `${BASE_URL}/${location}?unitGroup=metric&key=UAUCRVY7KJ6J2JS83XPXS2UZL&contentType=json`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        throw error;
    }
}
