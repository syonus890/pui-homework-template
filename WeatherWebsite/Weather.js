const products = {

    "shirt":
        [
            {
                "link": "https://www.aritzia.com/us/en/product/contour-squareneck-shortsleeve-t-shirt/104190052.html?dwvar_104190_color=29484",
                "imageTitle": "shirt-1"
            },
            {
                "link": "https://www.aritzia.com/us/en/product/contour-squareneck-shortsleeve-t-shirt/104190052.html",
                "imageTitle": "shirt-2"
            },
            {
                "link": "https://www.aritzia.com/us/en/product/contour-squareneck-shortsleeve-t-shirt/104190052.html?dwvar_104190_color=30175",
                "imageTitle": "shirt-3"
            },
            {
                "link": "https://www.aritzia.com/us/en/product/contour-squareneck-shortsleeve-t-shirt/104190052.html?dwvar_104190_color=1274",
                "imageTitle": "shirt-4"
            }
        ],

        "pants": [
            [
                {
                    "link": "https://www.aritzia.com/us/en/product/the-effortless-pant™/77775.html?dwvar_77775_color=15104",
                    "imageTitle": "pants-1"
                },
                {
                    "link": "https://www.aritzia.com/us/en/product/the-effortless-pant™/77775.html?dwvar_77775_color=15033",
                    "imageTitle": "pants-2"
                },
                {
                    "link": "https://www.aritzia.com/us/en/product/the-effortless-pant™/77775.html?dwvar_77775_color=28701",
                    "imageTitle": "pants-3"
                },
                {
                    "link": "https://www.aritzia.com/us/en/product/the-effortless-pant™/77775.html?dwvar_77775_color=1274",
                    "imageTitle": "pants-4" 
                }
            ],

        ],

        "jacket": [
            [
                {
                    "link": "https://www.aritzia.com/us/en/product/symphony-coat/109853.html?dwvar_109853_color=6162#fs",
                    "imageTitle": "jacket-1"
                },
                {
                    "link": "https://www.aritzia.com/us/en/product/symphony-coat/109853.html?dwvar_109853_color=2529",
                    "imageTitle": "jacket-2"
                },
                {
                    "link": "https://www.aritzia.com/us/en/product/symphony-coat/109853.html?dwvar_109853_color=1274",
                    "imageTitle": "jacket-3"
                },
                {
                    "link": "https://www.aritzia.com/us/en/product/the-super-puff™/111494.html?dwvar_111494_color=1274",
                    "imageTitle": "jacket-4" 
                }
            ]
        ],

        "shoes": [
            [
                {
                    "link": "https://www.aritzia.com/us/en/product/gt-2160/111554.html?dwvar_111554_color=31136",
                    "imageTitle": "shoes-1"
                },
                {
                    "link": "https://www.aritzia.com/us/en/product/xt-6/92321.html?dwvar_92321_color=28628",
                    "imageTitle": "shoes-2"
                },
                {
                    "link": "https://www.aritzia.com/us/en/product/530/82640.html?dwvar_82640_color=31176",
                    "imageTitle": "shoes-3"
                },
                {
                    "link": "https://www.aritzia.com/us/en/product/2002/84719.html?dwvar_84719_color=28053",
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
    generateOutfit(randomOutfit.shirt.link, 200, 100, "Shirt", displayData);
    generateOutfit(randomOutfit.pants.link, 200, 100, "Pants", displayData);
    generateOutfit(randomOutfit.jacket.link, 200, 100, "Jacket", displayData);
    generateOutfit(randomOutfit.shoes.link, 200, 100, "Shoes", displayData);
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

// Call the outfitImage function to display a random outfit when needed
outfitImage();
