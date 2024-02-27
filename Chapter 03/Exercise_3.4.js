// Object declaration for myCar
const myCar = {
    make: "Toyota",
    model: "Camry",
    tires: 4,
    doors: 4,
    color: "blue",
    forSale: false
};

// Variable propColor is assigned the value "color"
let propColor = "color";

// Using the dynamic property name to change the color property of myCar to "red"
myCar[propColor] = "red";

// Changing the value of propColor to "forSale"
propColor = "forSale";

// Using the dynamic property name to change the forSale property of myCar to true
myCar[propColor] = true;

// Logging the make and model properties of myCar
console.log(myCar.make + " " + myCar.model); // Outputs: Toyota Camry

// Logging the value of the forSale property of myCar
console.log(myCar.forSale); // Outputs: true
