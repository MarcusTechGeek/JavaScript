// Using Math.ceil() to round up a decimal number to the nearest integer.
console.log(Math.ceil(5.7));

// Using Math.floor() to round down a decimal number to the nearest integer.
console.log(Math.floor(5.7));

// Using Math.round() to round a decimal number to the nearest integer.
console.log(Math.round(5.7));

// Generating a random decimal number between 0 and 1.
console.log(Math.random());

// Generating a random integer between 0 and 10 (inclusive).
console.log(Math.floor(Math.random() * 11));

// Generating a random integer between 1 and 10 (inclusive).
console.log(Math.floor(Math.random() * 10) + 1);

// Generating a random integer between 1 and 100 (inclusive).
console.log(Math.floor(Math.random() * 100) + 1);

// Defining a function to generate random numbers within a specified range.
function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generating and printing 100 random numbers between 1 and 100 (inclusive).
for (let x = 0; x < 100; x++) {
    console.log(ranNum(1, 100));
}
