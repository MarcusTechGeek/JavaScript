// Array representing the choices: Rock, Paper, Scissors
const myArr = ["Rock", "Paper", "Scissors"];

// Randomly generating choices for the computer and the player
let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);

// Initializing a variable for the game result message
let message = "Player " + myArr[player] + " vs Computer " + myArr[computer] + " ";

// Checking for game outcomes based on the rules of rock-paper-scissors
if (player === computer) {
    message += "It's a tie";
} else if (player > computer) {
    // Player wins unless computer is Rock (0) and player is Scissors (2)
    if (computer == 0 && player == 2) {
        message += "Computer Wins";
    } else {
        message += "Player Wins";
    }
} else {
    // Computer wins unless player is Rock (0) and computer is Scissors (2)
    if (computer == 2 && player == 0) {
        message += "Player Wins";
    } else {
        message += "Computer Wins";
    }
}

// Logging the game result message to the console
console.log(message);
