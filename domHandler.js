// domHandler.js
export function clearInput(inputElement) {
    inputElement.value = '';
}

export function displayError(message) {
    console.error(message);
}

export function logWeatherData(data) {
    console.log('Processed Weather Data:', data);
}
