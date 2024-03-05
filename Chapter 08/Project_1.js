// Original string to be scrambled.
let str = "JavaScript";

// Define a function to scramble the characters of a given string.
function scramble(val) {
    // Set the maximum length of the input string.
    let max = val.length;

    // Initialize an empty string to store the scrambled result.
    let temp = "";

    // Iterate through the characters of the input string.
    for (let i = 0; i < max; i++) {
        // Log the current length of the input string.
        console.log(val.length);

        // Generate a random index within the current length of the string.
        let index = Math.floor(Math.random() * val.length);

        // Append the character at the randomly chosen index to the result string.
        temp += val[index];
        console.log(temp);

        // Remove the chosen character from the input string.
        val = val.substr(0, index) + val.substr(index + 1);
        console.log(val);
    }

    // Return the scrambled string.
    return temp;
}

// Call the function and print the scrambled string to the console.
console.log(scramble(str));
