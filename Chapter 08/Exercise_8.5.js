// Define a string with a sentence.
let val = "I love JavaScript";

// Convert the string to lowercase for consistent comparison.
val = val.toLowerCase();

// Define an array containing vowels.
let vowels = ["a", "e", "i", "o", "u"];

// Iterate through each vowel in the array.
vowels.forEach((letter, index) => {
    // Log the current vowel to the console.
    console.log(letter);

    // Replace all occurrences of the vowel with its index in the string.
    val = val.replaceAll(letter, index);
});

// Print the modified string with vowels replaced by their respective indices.
console.log(val);
