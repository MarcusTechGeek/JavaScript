function showNames() {
    // Initialize an empty string to store the last argument
    let lastOne = "";

    // Loop through all the arguments passed to the function
    for (let i = 0; i < arguments.length; i++) {
        // Assign the current argument to the variable lastOne
        lastOne = arguments[i];
    }

    // Return the last argument
    return lastOne;
}

// Call the function with multiple arguments
console.log(showNames("JavaScript", "Laurence", "Mike", "Larry"));
