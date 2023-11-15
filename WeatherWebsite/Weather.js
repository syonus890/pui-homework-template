
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", getWeatherAndOutfit);
});

function getWeatherAndOutfit() {
    const locationInput = document.getElementById("location");
    const location = locationInput.value;

    // Call weatherstack API to get weather data for the location
    // Replace 'API_KEY' and 'API_URL' with your API details

    const apiKey = '1e122bc94cabc5ad1f8bfba0fca187eb';
    const apiURL = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const temperature = data.current.temperature;
            const conditions = data.current.weather_descriptions[0];
            
            // Generate an outfit suggestion based on temperature and conditions
            const outfitSuggestion = generateOutfit(temperature, conditions);
            
            const weatherForecast = document.getElementById("weather-forecast");
            weatherForecast.innerHTML = `For ${location}, it's ${temperature}°C and ${conditions}. You should wear: ${outfitSuggestion}`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

function generateOutfit(temperature, conditions) {
    // Logic to generate outfit suggestions based on temperature and conditions here.
    // For example, you can use if statements to determine the outfit.
    // You may need to define different outfits for various weather conditions.
    
    if (temperature < 10) {
        return "Wear a heavy coat, gloves, and a scarf.";
    } else if (temperature < 20) {
        return "Wear a jacket and jeans.";
    } else {
        return "It's warm outside, wear light clothing.";
    }
}