let userInputString = prompt(
  "Please enter a list of comma-separated froyo flavors:", 
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

let stringArray = userInputString.split(",");

function countFlavors(flavors) {
  let flavorCount = {}; 
  
  for (let i = 0; i < flavors.length; i++) {
    let flavor = flavors[i].trim().toLowerCase(); 
    
    if (flavorCount[flavor]) {
      flavorCount[flavor]++;
    } else {
      flavorCount[flavor] = 1;
    }
  }
  return flavorCount;

}


console.table(countFlavors(stringArray));

let userInput = prompt(
  "Enter froyo flavors (comma-separated):", 
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

if (userInput !== null) {
    console.log("Customer ordered:", userInput);
} else {
    console.log("The user canceled the order.");
}
