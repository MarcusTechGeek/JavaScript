// Prompting the user to pick a number 0-10 and converting it to a number
let prize = prompt("Pick a number 0-10");
prize = Number(prize);

// Initializing a variable for the output string
let output = "My Selection: ";

// Using a switch statement to build the output string based on the prize value
switch (prize) {
    case 0:
        output += "Gold ";
    // Missing break statement here
    case 1:
        output += "Coin ";
        break;
    case 2:
        output += "Big ";
    // Missing break statement here
    case 3:
        output += "Box of ";
    // Missing break statement here
    case 4:
        output += "Silver ";
    // Missing break statement here
    case 5:
        output += "Bricks ";
        break;
    default:
        output += "Sorry Try Again";
}

// Logging the final output to the console
console.log(output);
