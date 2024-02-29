// Generating a random number between 0 and 5 (inclusive)
const randomNumber = Math.floor(Math.random() * 6);

// Initializing variables for the answer, question, and output
let answer = "Something went wrong";
let question = prompt("Ask me anything");

// Using a switch statement to determine the answer based on the random number
switch (randomNumber) {
    case 0:
        answer = "It will work out";
        break;
    case 1:
        answer = "Maybe, maybe not";
        break;
    case 2:
        answer = "Probably not";
        break;
    case 3:
        answer = "Highly likely";
        break;
    default:
        answer = "I don't know about that";
}

// Combining the user's question and the generated answer for output
let output = "You asked me " + question + ". I think that " + answer;

// Logging the final output to the console
console.log(output);