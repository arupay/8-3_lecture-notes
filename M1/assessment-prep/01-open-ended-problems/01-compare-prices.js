// Setup: The program below is supposed to check which value is larger, but it's broken.
//    Checkpoint: How can you tell it's broken? Can you run the code?
// Challenge:  Fix the program so that it correctly checks which value is larger.

// Hint:
//  Write a function that converts a string like "€39.501" into the number 39501
//  Using this function, compare the price of the house to the price of the car AS NUMBERS

// DO NOT CHANGE THE VALUE OF THESE VARIABLES
let priceOfHouse = "€1.500.000";
let priceOfCar = "€20.000";

function filterNums(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "€" && string[i] !== ".") {
      newString += string[i];
    }
  }
  return Number(newString);
}

let priceOfCarString = filterNums(priceOfCar);
let priceOfHouseString = filterNums(priceOfHouse);

if (priceOfHouseString > priceOfCarString) {
  console.log("The house is more expensive");
} else {
  console.log("The car is more expensive");
}
