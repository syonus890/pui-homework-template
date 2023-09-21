class cinnaRollPrice {
    // constructor(price, name) {
    //     this.name = ""; 
    //     this.price = 0;
    

    constructor (packsize, product, glazing) {
        this.packsize = packsize; 
        this.product = product;
        this.glazing = glazing;
    }
}

// const glazingPrices = {
//     "Original": 0.00,
//     "Sugar milk": 0.00,
//     "Vanilla milk": 0.50,
//     "Double chocolate": 1.50,
// }

const originalGlazing = {
    glazeName: "Keep original", 
    glazeValue: 0.00

};
const sugarGlazing = {
    glazeName: "Sugar milk", 
    glazeValue: 0.00

};
const vanillaGlazing = {
    glazeName: "Vanilla milk", 
    glazeValue: 0.50

};
const chocolatelGlazing = {
    glazeName: "Double chocolate", 
    glazeValue: 1.50

};

const listGlaze = [originalGlazing, sugarGlazing, vanillaGlazing, chocolatelGlazing];

const listGlazeOpt = document.querySelector("#glazingOptions")

for (var j = 0; j<listGlaze.length; j++){
    const glazeOption = document.createElement('option')
    glazeOption.innerText = listGlaze[j].glazeName;
    glazeOption.glazeValue = j;

    listGlazeOpt.appendChild(glazeOption);
}

const packSize1 = {
    name: "1",
    value: 1
}
const packSize3 = {
    name: "3",
    value: 3
}
const packSize6 = {
    name: "6",
    value: 5
}
const packSize12 = {
    name: "12",
    value: 10
}

const listPack = [packSize1, packSize3, packSize6, packSize12];

const packSizeOpt = document.querySelector("#packSizeOptions")

for (var j = 0; j<listPack.length; j++){
    const packOption = document.createElement('option')
    packOption.innerText = listPack[j].name;
    packOption.value = j;

    packSizeOpt.appendChild(packOption);
}
// glazedOptions.addEventListener(onchange,computePrice);
packSizeOptions.addEventListener(onchange, computePrice);

function computePrice() {
    const glazingSelect = document.getElementById("glazingOptions");
    const packSizeSelect = document.getElementById("packSizeOptions");


    const selectedGlazing = listGlaze.value;
    //const selectedPackSize = parseInt(packSizeSelect.value);

    const basePrice = 2.49;

    const glazingPrice = glazingPrices[selectedGlazing];
    const packSizePrice = packSizePrices[selectedPackSize];
    const updatedPrice = (basePrice + glazingPrice) * packSizePrice;
}


