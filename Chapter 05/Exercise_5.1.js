// We are setting a maximum number for the guessing game.
const max = 5;

// We are generating a random number between 1 and the maximum number.
const ranNumber = Math.floor(Math.random() * max) + 1;

// We are not showing the random number to keep it a secret for the guessing game.
// The line below is commented out, which means it won't run for now.
// console.log(ranNumber);

// We are setting a variable 'correct' to false initially.
let correct = false;

// We are using a loop that keeps running until the player guesses the correct number.
while (!correct) {
    // We are asking the player to guess a number and storing it in the variable 'guess'.
    let guess = prompt("Guess a Number 1 - " + max);

    // We are converting the player's guess from a text to a number.
    guess = Number(guess);

    // We are checking if the guess is equal to the random number.
    if (guess === ranNumber) {
        // If it's correct, we set 'correct' to true and tell the player they got it right.
        correct = true;
        console.log("You got it " + ranNumber);
    } else if (guess > ranNumber) {
        // If the guess is too high, we tell the player it's too high.
        console.log("Too high");
    } else {
        // If the guess is too low, we tell the player it's too low.
        console.log("Too Low");
    }
} 
