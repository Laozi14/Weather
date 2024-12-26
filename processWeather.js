// processWeather.js
export function processWeatherData(data) {
    return {
        location: data.resolvedAddress,
        timezone: data.timezone,
        current: {
            date: data.currentConditions.datetime,
            temperature: data.currentConditions.temp,
            conditions: data.currentConditions.conditions,
            windSpeed: data.currentConditions.windspeed,
            humidity: data.currentConditions.humidity,
            icon: data.currentConditions.icon
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
