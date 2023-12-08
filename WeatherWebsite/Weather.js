//Data for all the shirts, pants, jackets, and shoes
const products = {

    "shirt":
        [
            {
                "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.43.28 PM.png",
                "imageTitle": "shirt-1"
            },
            {
                "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.43.43 PM.png",
                "imageTitle": "shirt-2"
            },
            {
                "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.43.57 PM.png",
                "imageTitle": "shirt-3"
            },
            {
                "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.44.11 PM.png",
                "imageTitle": "shirt-4"
            },
            {
                "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.55.41 PM.png",
                "imageTitle": "shirt-5"
            },
            {
                "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.54.32 PM.png",
                "imageTitle": "shirt-6"
            },
            {
                "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.53.42 PM.png",
                "imageTitle": "shirt-7"
            }
        ],

        "pants": [
            
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.45.43 PM.png",
                    "imageTitle": "pants-1"
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.45.59 PM.png",
                    "imageTitle": "pants-2"
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.46.13 PM.png",
                    "imageTitle": "pants-3"
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.46.25 PM.png",
                    "imageTitle": "pants-4" 
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.57.51 PM.png",
                    "imageTitle": "pants-5" 
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.56.48 PM.png",
                    "imageTitle": "pants-6" 
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.56.18 PM.png",
                    "imageTitle": "pants-7" 
                }
            

        ],

        "jacket": [
            
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.52.00 PM.png",
                    "imageTitle": "jacket-1"
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.52.14 PM.png",
                    "imageTitle": "jacket-2"
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.52.33 PM.png",
                    "imageTitle": "jacket-3"
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.52.50 PM.png",
                    "imageTitle": "jacket-4" 
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.52.45 PM.png",
                    "imageTitle": "jacket-5"
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.52.10 PM.png",
                    "imageTitle": "jacket-6"
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.51.43 PM.png",
                    "imageTitle": "jacket-7"
                }
                
        ],

        "shoes": [
            
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.54.40 PM.png",
                    "imageTitle": "shoes-1"
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.54.51 PM.png",
                    "imageTitle": "shoes-2"
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.55.04 PM.png",
                    "imageTitle": "shoes-3"
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-11-27 at 5.55.24 PM.png",
                    "imageTitle": "shoes-4" 
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.59.32 PM.png",
                    "imageTitle": "shoes-5" 
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.59.01 PM.png",
                    "imageTitle": "shoes-6" 
                },
                {
                    "imagePath": "PUI-Images/Screenshot 2023-12-06 at 5.58.38 PM.png",
                    "imageTitle": "shoes-7" 
                }
            
        ]
    }

//This function displays the outfits after it is parsed through in getRandomOutfit and generateOutfit
function outfitImage() {
    const displayData = document.getElementById("display-data");
    const displayWords = document.getElementById("display-words");

    displayData.innerHTML = "";
    displayWords.innerHTML = "Here is your outfit for today!"

    // Call the function to get a random outfit
    const randomOutfit = getRandomOutfit();

    // Add outfit images to the display-data div
    generateOutfit(randomOutfit.shirt.imagePath, 600, 300, "Shirt", displayData);
    generateOutfit(randomOutfit.pants.imagePath, 600, 300, "Pants", displayData);
    generateOutfit(randomOutfit.jacket.imagePath, 600, 300, "Jacket", displayData);
    generateOutfit(randomOutfit.shoes.imagePath, 600, 300, "Shoes", displayData);
}

//This function randomly selects an index for each clothing category and gets it from the JSON template
function getRandomOutfit() {
    const shirtIndex = getRandomIndex("shirt");
    const pantsIndex = getRandomIndex("pants");
    const jacketIndex = getRandomIndex("jacket");
    const shoesIndex = getRandomIndex("shoes");

    const randomOutfit = {
        shirt: products.shirt[shirtIndex],
        pants: products.pants[pantsIndex],
        jacket: products.jacket[jacketIndex],
        shoes: products.shoes[shoesIndex],
    };

    return randomOutfit;
}

//Generates a random index for each clothing category
function getRandomIndex(category) {
    const categoryItems = products[category];
    return Math.floor(Math.random() * categoryItems.length);
}

//Dynamically creates an image and appends it 
function generateOutfit(src, width, height, alt, parentElement) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    parentElement.appendChild(img);
}

//Here all the OpenWeatherMaps API functionality starts
const apiKey = "3bcf6d5fa69b8119f53fea9e7fb31efb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#location");
const searchButton = document.querySelector("#submitZipcode");

//Here, I am fetching data from the API to display in WeatherWebsite.html 
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector("#city").innerHTML = "City: " + data.name;
    document.querySelector("#temperature").innerHTML = "Current temperature: " + Math.round(data.main.temp) + "°C";
    document.querySelector("#mintemp").innerHTML = "Minimum temperature: " + Math.round(data.main.temp_min) + "°C";
    document.querySelector("#maxtemp").innerHTML = "Maximum temperature: " + Math.round(data.main.temp_max) + "°C";
    document.querySelector("#conditions").innerHTML = "Conditions: " + data.weather[0].main;

    //Dynamically set the background of the page based on the weathers condition
    setBackgroundBasedOnWeather(data.weather[0].main);

}

function setBackgroundBasedOnWeather(weatherCondition) {
    const body = document.body;

    //Create a mapping between weather conditions and background images
    const backgroundMap = {
        'Clear': 'url("PUI-Images/sun.jpg")',
        'Clouds': 'url("PUI-Images/pexels-pixabay-531767.jpg")',
        'Rain': 'url("PUI-Images/1000_F_276388003_hdaYhobdFwLHbpL39Qfl8GLG6jXDQaby.jpg")',
        'Mist': 'url("PUI-Images/timelapse-of-rainy-weather-in-mountains-misty-fog-blowing-over-pine-tree-forest-after-rain-outdoors-video.jpg")',
        'Snow': 'url("PUI-Images/depositphotos_98723870-stock-photo-winter-background-with-snowy-weather.jpg")',
    };

    console.log("weather condition: ", weatherCondition);

    //Set the background based on the weather condition
    body.style.backgroundImage = backgroundMap[weatherCondition] || 'url("PUI-Images/360_F_469073270_H9pWB0wYhfKElKXD3k9R60gsYeH9xSQO.jpg")';

    console.log("background image: ", body.style.backgroundImage);

}

//I added this function for debugging purposes
//The value passed to checkWeather will make a request to the API, fetch information, and display it 
searchButton.addEventListener("click", ()=> {
    console.log('Search button clicked');
    checkWeather(searchBox.value);

}) 