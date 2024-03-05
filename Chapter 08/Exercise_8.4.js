// Define a string containing words to be capitalized.
const val = "thIs will be capiTalized for each word";

// Define a function to capitalize the first letter of each word in a given string.
function wordsCaps(str) {
    // Convert the string to lowercase to handle any capitalization variations.
    str = str.toLowerCase();

    // Create an empty array to store capitalized words temporarily.
    const tempArr = [];

    // Split the string into an array of individual words.
    let words = str.split(" ");

    // Iterate through each word in the array.
    words.forEach(word => {
        // Capitalize the first letter of the word and concatenate it with the rest of the word.
        let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
        
        // Push the capitalized word into the temporary array.
        tempArr.push(temp);
    });

    // Join the capitalized words back into a single string, separated by spaces.
    return tempArr.join(" ");
}

// Call the function and print the result to the console.
console.log(wordsCaps(val));
