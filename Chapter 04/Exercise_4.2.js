// Prompting the user to input their age and converting it to a number
let age = prompt("How old are you?");
age = Number(age);

// Declaring a variable to store the message
let message;

// Checking age conditions and assigning a message accordingly
if (age >= 21) {
    message = "You can enter and drink.";
} else if (age >= 19) {
    message = "You can enter but not drink.";
} else {
    message = "You are not allowed in!";
}

// Logging the final message to the console
console.log(message);
