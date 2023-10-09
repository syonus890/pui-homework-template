//cart array
const cart = [];

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

//objects 
let originalRoll = new Roll("Original", "Sugar milk", 1, calculateBasePrice("Original", "Sugar milk"));
let walnutRoll = new Roll("Walnut", "Vanilla milk", 12, calculateBasePrice("Walnut", "Vanilla milk"));
let raisinRoll = new Roll("Raisin", "Sugar milk", 3, calculateBasePrice("Raisin", "Sugar milk"));
let appleRoll = new Roll("Apple", "Keep original", 3, calculateBasePrice("Apple", "Keep original"));

//push objects in cart array
cart.push(originalRoll);
cart.push(walnutRoll);
cart.push(raisinRoll);
cart.push(appleRoll);

//calculate the roll price 
function calculatePackSizePrice(roll) {
    let packMultiplier = packConnectValue[roll.size];
    let combined = calculateBasePrice(roll.type, roll.glazing);
    return (combined * packMultiplier).toFixed(2);
}

//display cart in HTML file with template<>
function displayCart(roll, index) {
    let template = document.querySelector("#cart-item");
    let templatePage = template.content.cloneNode(true);
    roll.element = templatePage.querySelector(".cartFlex");
    
    //call html classes/ids to edit text on page
    templatePage.querySelector(".pictures-marginPhoto").src = "./assets/products/" + rolls[roll.type]["imageFile"];
    templatePage.querySelector(".productDetail").innerText = roll.type + " Cinnamon Roll";
    templatePage.querySelector("#cart-glaze").innerText = roll.glazing;
    templatePage.querySelector("#cart-pack").innerText = "Pack size: " + roll.size;
    templatePage.querySelector(".productPrice").innerText = "$" + calculatePackSizePrice(roll);
    templatePage.querySelector(".removeFlex").addEventListener("click", function(){removeItem(roll, index)});
    console.log(templatePage.querySelector(".removeFlex"));

    
    let cartParent = document.querySelector(".the-whole-shopping-cart");
    cartParent.appendChild(roll.element);
}

//display 4 rolls in cart
displayCart(originalRoll, 0);
displayCart(walnutRoll, 1);
displayCart(raisinRoll, 2);
displayCart(appleRoll, 3);

//calculate the total price in the cart
function calculateTotalPrice() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++){
        sum = sum + parseFloat(calculatePackSizePrice(cart[i]));
    }

    return "$" + sum.toFixed(2);

}

//change total cart price in cartpage.html 
document.querySelector("#cart-Total").innerText = calculateTotalPrice();

//remove item in cart 
function removeItem(roll, index) {
    roll.element.remove();
     cart.splice(index, 1);
     console.log(cart);
     document.querySelector("#cart-Total").innerText = calculateTotalPrice();
     console.log(document.querySelector("#cart-Total").innerText);
} 
