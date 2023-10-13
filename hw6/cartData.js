//cart array
const cart = [];
retrieveFromLocalStorage();
//calculate the base price for each roll
function calculateBasePrice(rollType, rollGlazing) {
    let basePrice = 0;
    for (let roll in rolls) {
        if (rolls.hasOwnProperty(rollType)) {
            basePrice = rolls[rollType]["basePrice"];
        }
    }
    let glazePrice = 0; 
    for (let glazeType in glazingPrice) {
        if (glazeType === rollGlazing) {
            glazePrice = glazingPrice[glazeType];
            break; 
        }
    }

    let combineBasePrice = basePrice + glazePrice;
    
    return combineBasePrice;
}

function saveToLocalStorage() {
    const cartString = JSON.stringify(cart);
    sessionStorage.setItem('storedCart', cartString);
}

function retrieveFromLocalStorage(){
    const cartArrayString = sessionStorage.getItem("storedCart");
    const cartArray = JSON.parse(cartArrayString);
    for (const cartData of cartArray) {
        cart.push(cartData);
    }
}

let final_price=0;
for (let x of cart) {
    displayCart(x);
}

//display cart in HTML file with template<>
function displayCart(roll) {
    let template = document.querySelector("#cart-item");
    let templatePage = template.content.cloneNode(true);
    roll.element = templatePage.querySelector(".cartFlex");
    
    //call html classes/ids to edit text on page
    templatePage.querySelector(".pictures-marginPhoto").src = "./assets/products/" + rolls[roll.type].imageFile;
    templatePage.querySelector(".productDetail").innerText = roll.type + " Cinnamon Roll";
    templatePage.querySelector("#cart-glaze").innerText = roll.glazing;
    templatePage.querySelector("#cart-pack").innerText = "Pack size: " + roll.size;
    templatePage.querySelector(".productPrice").innerText = "$" + calculate_Price(roll);
    final_price = final_price + calculate_Price(roll);
    templatePage.querySelector(".removeFlex").addEventListener("click", function(){removeItem(roll)});
    console.log(templatePage.querySelector(".removeFlex"));

    
    let cartParent = document.querySelector(".the-whole-shopping-cart");
    cartParent.appendChild(roll.element);
    saveToLocalStorage();
}


function calculate_Price(roll) {
    const glaze_price = glazingPrice[roll.glazing];  // Access the glaze price directly
    const packsize_price = packConnectValue[roll.size]; // Use 'size' instead of 'glazing' here
    const totalPrice = (rolls[roll.type].basePrice + glaze_price) * packsize_price;
    return parseFloat(totalPrice.toFixed(2)); // Ensure final_price is always rounded to 2 decimal places
}



//change total cart price in cartpage.html 
document.querySelector("#cart-Total").innerText = '$' + final_price.toFixed(2);


function removeItem(roll) {
    const removedPrice = calculate_Price(roll);
    final_price = parseFloat((final_price - removedPrice).toFixed(2));
    roll.element.remove();
    cart.splice(cart.indexOf(roll), 1);
    document.querySelector("#cart-Total").innerText = '$' + final_price.toFixed(2); // Update the total price
    saveToLocalStorage();
}
