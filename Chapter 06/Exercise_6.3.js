// We have two variables 'val1' and 'val2' with specific numbers.
const val1 = 10;
const val2 = 5;

// We have a variable 'operat' set to "-" which represents the operation to be performed.

// We are defining a function called 'cal' that takes three parameters - 'a', 'b', and 'op'.
function cal(a, b, op) {
  // We are checking if the value of 'op' is equal to "-" (subtraction).
  if (op == "-") {
    // If it is, we subtract 'b' from 'a' and display the result in the console.
    console.log(a - b);
  } else {
    // If 'op' is not "-", we assume it is addition.
    // We add 'a' and 'b' together and display the result in the console.
    console.log(a + b);
  }
}

// We are calling the 'cal' function with 'val1', 'val2', and 'operat' as arguments.
cal(val1, val2, operat);
