// script.js

// Base URL for the Visual Crossing API
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

// Your Visual Crossing API key
const API_KEY = 'YOUR_API_KEY';

// Function to fetch weather data for a given location
async function fetchWeatherData(location) {
    try {
        // Construct the API URL
        const url = `${BASE_URL}/${location}?unitGroup=metric&key=UAUCRVY7KJ6J2JS83XPXS2UZL&contentType=json`;
        
        // Fetch data from the API
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.status}`);
        }
        
        // Parse the response as JSON
        const data = await response.json();
        
        // Process the data
        const processedData = processWeatherData(data);
        
        // Log the processed data
        console.log(processedData);
        
        // Return the processed data
        return processedData;
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}

// Function to process the weather data and return required fields
function processWeatherData(data) {
    return {
        location: data.address,
        timezone: data.timezone,
        current: {
            date: data.currentConditions.datetime,
            temperature: data.currentConditions.temp,
            conditions: data.currentConditions.conditions,
            windSpeed: data.currentConditions.windspeed,
            humidity: data.currentConditions.humidity,
            icon: data.currentConditions.icon // Weather icon code
        },
        daily: data.days.map(day => ({
            date: day.datetime,
            temperatureMax: day.tempmax,
            temperatureMin: day.tempmin,
            conditions: day.conditions,
            icon: day.icon
        }))
    };
}

// Test the function with a sample location
fetchWeatherData('New York'); // Replace 'New York' with any location you want
