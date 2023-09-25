//instantiate variables
let glazingName = ["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"];
let glazeValue = [0.0, 0.0, 0.5, 1.5];
let packSizeValue = [1, 3, 5, 10];
let packSizePrice = ["1", "3", "6", "12"];
const basePrice = 2.49;
let glaze = 0;
let packSize = 1;
let updated_price = 0;

//create two objects with names and values attached
const glazingPrice = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double chocolate": 1.5

}

const packConnectValue = {
    "1":1,
    "3": 3,
    "6": 5,
    "12":10
}

//call querySelector to search elements 
const listGlazeOpt = document.querySelector("#glazingOptions");
const packSizeOpt = document.querySelector("#packSizeOptions");

//calculate prices for when user clicks on glazing options and pack size
function calculate_Price(element) {
    let glazingValue = document.getElementById("glazingOptions").value;
    console.log(glazingValue);
    let packingValue = document.getElementById("packSizeOptions").value;
    console.log(packingValue);

    let glazePrice = glazingPrice[glazingValue];
    let packPrice = packConnectValue[packingValue];
    //calculate price
    updated_price = (basePrice + glazePrice)*packPrice;

    updated_price = updated_price.toFixed(2);
    document.getElementById("currentPrice").innerHTML = "$" + updated_price;

    return updated_price;
}

function computePacksizePrice() {
    packSize = parseInt(this.value);
    console.log(packSize);
    display_price(calculate_Price());
}

//use for loops to display dropdown
for (var j = 0; j<glazingName.length; j++){
    const glazeOption = document.createElement('option');
    glazeOption.innerText = glazingName[j];
    glazeOption.value = glazingName[j];

    listGlazeOpt.appendChild(glazeOption);
}

for (var j = 0; j<packSizePrice.length; j++){
    const packOption = document.createElement('option');
    packOption.innerText = packSizePrice[j];
    packOption.value = packSizePrice[j];

    packSizeOpt.appendChild(packOption);
}







