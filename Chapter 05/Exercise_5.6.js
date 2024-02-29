// We are creating an empty array called 'myArray' to store numbers.
const myArray = [];

// We are using a loop to add numbers from 1 to 10 to 'myArray'.
for (let x = 0; x < 10; x++) {
    // We are adding each number to the array.
    myArray.push(x + 1);
}

// We are showing the entire 'myArray' in the console.
console.log(myArray);

// We are using a loop to go through each element in 'myArray' and show them one by one in the console.
for (let i = 0; i < myArray.length; i++) {
    // We are showing the current element in the console.
    console.log(myArray[i]);
}

// We are using another type of loop called 'for...of' to go through each element in 'myArray'.
for (let val of myArray) {
    // We are showing the current element in the console.
    console.log(val);
}
