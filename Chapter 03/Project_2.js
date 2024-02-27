// Object declarations for three items
const item3 = {
    name: "computer",
    model: "imac",
    cost: 1000,
    qty: 3
}

const item2 = {
    name: "phone",
    model: "android",
    cost: 500,
    qty: 11
}

const item1 = {
    name: "tablet",
    model: "ipad",
    cost: 650,
    qty: 1
}

// Object declaration for the inventory array and pushing the items into it
const inventory = [item1, item2, item3];

// Logging the entire inventory array
console.log(inventory);

// Logging the quantity (qty) of the third item in the inventory array
console.log(inventory[2].qty); // Outputs: 3
