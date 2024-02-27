// Prompting the user to enter a number and converting it to a numeric value
let val = prompt("What number?");
val = Number(val);

// Initializing a variable for a fixed number
let num = 100;

// Initializing a variable for the message
let message = "nothing";

// Comparing the entered number (val) with the fixed number (num)
if (val > num) {
    message = val + " was greater than " + num;
} else if (val === num) {
    message = val + " was equal to " + num;
} else {
    message = val + " is less than " + num;
}

// Logging the message to the console twice
console.log(message);
console.log(message);
