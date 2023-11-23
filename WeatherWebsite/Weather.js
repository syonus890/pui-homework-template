// let globalTemperature;

// document.addEventListener("DOMContentLoaded", function () {
//     const submitButton = document.getElementById("submit");
//     submitButton.addEventListener("click", getWeatherAndOutfit);
// });


// function getWeatherAndOutfit() {
//     const locationInput = document.getElementById("location");
//     const location = locationInput.value;

//     // Call weatherstack API to get weather data for the location

//     const apiKey = '1e122bc94cabc5ad1f8bfba0fca187eb';
//     const apiURL = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`;

//     fetch(apiURL)
//         .then(response => response.json())
//         .then(data => {
//             globalTemperature = data.current.temperature;

//             const conditions = data.current.weather_descriptions[0];
            
//             // Generate an outfit suggestion based on temperature and conditions
//             const outfitSuggestion = generateOutfit(src, width, height, alt);
            
//             const weatherForecast = document.getElementById("weather-forecast");
//             weatherForecast.innerHTML = `For ${location}, it's ${globalTemperature}°C and ${conditions}. You should wear: ${outfitSuggestion}`;
//             console.log(temperature, conditions);
//         })
//         .catch(error => {
//             console.error("Error fetching weather data:", error);
//         });

// }
 
// function outfitImage () {
//    var src = "PUI-Images/Screenshot 2023-10-29 at 5.05.48 PM.png" 
//    generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.05.48 PM.png", 200, 100, "Outfit");
//    generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.06.25 PM.png", 200, 100, "Outfit");
//    generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.06.44 PM.png", 200, 100, "Outfit");
//    generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.07.21 PM.png", 200, 100, "Outfit");
// }

// function generateOutfit(src, width, height, alt) {
//     var img = document.createElement("img");
//     img.src = src; 
//     img.width = width;
//     img.height = height;
//     img.alt = alt;

//     document.body.appendChild(img);

// }

// function imageOfOutfit () {
//     var src = "PUI-Images/Screenshot 2023-10-29 at 5.05.48 PM.png" 
//     generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.05.48 PM.png", 200, 100, "Outfit");
//     generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.06.25 PM.png", 200, 100, "Outfit");
//     generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.06.44 PM.png", 200, 100, "Outfit");
//     generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.07.21 PM.png", 200, 100, "Outfit");
//  }

let globalTemperature;

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function () {
        getWeatherAndOutfit();
    });
});

function getWeatherAndOutfit() {
    const locationInput = document.getElementById("location");
    const location = locationInput.value;

    // Call weatherstack API to get weather data for the location
    const apiKey = '1e122bc94cabc5ad1f8bfba0fca187eb';
    const apiURL = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            globalTemperature = data.current.temperature;
            const conditions = data.current.weather_descriptions[0];

            // Display weather data on WeatherOutfit.html
            const weatherForecast = document.getElementById("weather-forecast");
            weatherForecast.innerHTML = `For ${location}, it's ${globalTemperature}°C and ${conditions}.`;

            console.log(data);
            // Generate and display outfit images
            outfitImage();
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

function outfitImage() {
    // You can customize this function to generate and display outfit images.
    // For example, update the content of the "display-data" div with the outfit images.

    const displayData = document.getElementById("display-data");

    displayData.innerHTML = "";

    // Add outfit images to the displayData div
    generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.05.48 PM.png", 200, 100, "Outfit", displayData);
    generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.06.25 PM.png", 200, 100, "Outfit", displayData);
    generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.06.44 PM.png", 200, 100, "Outfit", displayData);
    generateOutfit("PUI-Images/Screenshot 2023-10-29 at 5.07.21 PM.png", 200, 100, "Outfit", displayData);
}

function generateOutfit(src, width, height, alt, parentElement) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    parentElement.appendChild(img);
}
