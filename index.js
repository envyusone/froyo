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

