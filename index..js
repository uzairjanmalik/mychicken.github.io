function calculatechickenprice(weightingrams) {
    const pricePerKg = 500; //price of chicken for rupees//
    const wheightinkg = weightingrams / 1000; //convert grams into kilogram//
    const totalPrice = wheightinkg * pricePerKg;
    return totalPrice;   
}

function displayPrice() {
    const weight =parseFloat(prompt(`Enter the weight of chicken (in grams):`));
    if (!isNaN(weight)) {
        const totalPrice = calculatechickenprice(weight);
        document.write(`you have to pay ${totalPrice} rupees for ${weight} grams of chicken.`);
    }
    
    else {
        document.write("Invalid input. Please enter a valid weight in grams.")
    }
}


// Call the function to display the price when the script runs
displayPrice();















