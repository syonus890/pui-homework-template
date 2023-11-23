// let globalTemperature;
// var temperature = document.querySelector("#temperature")
// var submitZip = document.querySelector("#submitZipcode")


// document.addEventListener("DOMContentLoaded", function () {
//     const submitButton = document.getElementById("submitZipcode");
//     submitButton.addEventListener("click", function () {
//         getWeatherAndOutfit();
//     });
// });

// function getWeatherAndOutfit() {
//     const locationInput = document.getElementById("location");
//     const location = locationInput.value;


//     let zipcode = [
//         {
//             city: "Mission Viejo",
//             cityZip: 92688
//         },
//         {
//             city: "Pittsburgh",
//             cityZip: 15232
//         },
//         {
//             city: "Irvine",
//             cityZip: 92602
//         },
//         {
//             city: "San Diego",
//             cityZip: 92122
//         },
//         {
//             city: "San Francisco",
//             cityZip: 94016
//         }
//     ];

//     function findAPIurl() {
//         for (let i = 0; i < locationInput.length; i++){
//             if (locationInput[i].city === location) {
//                 return locationInput.cityZip;
//             }
//         }
//     }

//     // Call OpenWeatherMaps API to get weather data for the location
//     const cityZipcode  =findAPIurl();
//     const apiKey = '3bcf6d5fa69b8119f53fea9e7fb31efb';
//     const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin`;

//     fetch(apiURL)
//         .then(response => response.json())
//         .then(data => {
//             globalTemperature = data.current.temperature;
//             const conditions = data.current.weather_descriptions[0];

//             // Display weather data on WeatherOutfit.html
//             const weatherForecast = document.getElementById("temperature");
//             weatherForecast.innerHTML = `For ${location}, it's ${globalTemperature}°C and ${conditions}.`;

//             console.log(data);
//             // Generate and display outfit images
//             outfitImage();
//         })
//         .catch(error => {
//             console.error("Error fetching weather data:", error);
//         });
// }

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
