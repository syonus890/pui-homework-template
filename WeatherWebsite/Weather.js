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
            }
        ],

        "pants": [
            [
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
                }
            ],

        ],

        "jacket": [
            [
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
                }
            ]
        ],

        "shoes": [
            [
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
                }
            ]
        ]
    }

    

function outfitImage() {
    const displayData = document.getElementById("display-data");
    const displayWords = document.getElementById("display-words");

    displayData.innerHTML = "";
    displayWords.innerHTML = "Here is your outfit for today!"

    // Call the function to get a random outfit
    const randomOutfit = getRandomOutfit();

    // Add outfit images to the displayData div
    generateOutfit(randomOutfit.shirt.imagePath, 200, 100, "Shirt", displayData);
    generateOutfit(randomOutfit.pants.imagePath, 200, 100, "Pants", displayData);
    generateOutfit(randomOutfit.jacket.imagePath, 200, 100, "Jacket", displayData);
    generateOutfit(randomOutfit.shoes.imagePath, 200, 100, "Shoes", displayData);
}

function getRandomOutfit() {
    const shirtIndex = getRandomIndex("shirt");
    const pantsIndex = getRandomIndex("pants");
    const jacketIndex = getRandomIndex("jacket");
    const shoesIndex = getRandomIndex("shoes");

    const randomOutfit = {
        shirt: products.shirt[shirtIndex],
        pants: products.pants[0][pantsIndex],
        jacket: products.jacket[0][jacketIndex],
        shoes: products.shoes[0][shoesIndex],
    };

    return randomOutfit;
}

function getRandomIndex(category) {
    const categoryItems = products[category];
    return Math.floor(Math.random() * categoryItems.length);
}

function generateOutfit(src, width, height, alt, parentElement) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    parentElement.appendChild(img);
}


