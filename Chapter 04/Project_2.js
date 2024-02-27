// Prompting the user to enter a name
let person = prompt("Enter a name");

// Initializing a variable for the message
let message;

// Using a switch statement to check if the entered name matches specific cases
switch (person) {
    case "John":
    case "Larry":
    case "Jane":
    case "Laurence":
    case "Pieter":
        message = person + " is my friend";
        break;
    default:
        message = "I don't know " + person;
}

// Logging the message to the console
console.log(message);
