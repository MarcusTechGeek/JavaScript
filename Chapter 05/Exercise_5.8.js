// We have a variable 'output' to store a series of numbers as a string.
let output = "";

// We have a number 'skipThis' that we want to skip when adding numbers to 'output'.
let skipThis = 7;

// We are using a loop to go through numbers from 0 to 9.
for (let i = 0; i < 10; i++) {
    // We check if the current number is the same as 'skipThis'.
    if (i === skipThis) {
        // If it is, we skip adding this number and move on to the next one.
        continue;
    }

    // We add the current number to the 'output' string.
    output += i;
}

// We display the final 'output' string in the console.
console.log(output);

// Alternatively, we can achieve the same result using 'break' instead of 'continue'.
// The 'break' statement will exit the loop when 'skipThis' is reached.

// let output = "";
// let skipThis = 7;
// for (let i = 0; i < 10; i++) {
//   if (i === skipThis) {
//     break;
//   }
//   output += i;
// }

// console.log(output);
