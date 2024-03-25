// Define a function called greet that takes in a parameter fullName
function greet(fullName){
    // Log a greeting message to the console using template literals
    console.log(`Welcome, ${fullName[0]} ${fullName[1]}`);
}

// Define a function called processCall that takes in two parameters: user and callback
function processCall(user, callback){
    // Split the user string into an array of strings using a space as the separator
    const fullName = user.split(" ");
    // Call the callback function and pass the fullName array as an argument
    callback(fullName);
}

// Call the processCall function with the string "Laurence Svekis" as the user parameter
// and the greet function as the callback parameter
processCall("Laurence Svekis", greet);
