// We have an array of adjectives called 'adj'.
const adj = ["super", "wonderful", "bad", "angry", "careful"];

// We are defining a function called 'myFun'.
function myFun() {
    // We are asking the user a question and storing their response in the variable 'question'.
    const question = prompt("What is your name?");
    
    // We are generating a random index to pick a random adjective from the 'adj' array.
    const nameAdj = Math.floor(Math.random() * adj.length);

    // We are displaying a combination of the randomly chosen adjective and the user's response in the console.
    console.log(adj[nameAdj] + " " + question);
}

// We are calling the 'myFun' function, initiating the interaction.
myFun();
