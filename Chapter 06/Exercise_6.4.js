// We have an empty array called 'myArr'.
const myArr = [];

// We are using a loop to go through numbers from 0 to 9.
for(let x=0; x<10; x++){
  // We calculate two values, 'val1' and 'val2', based on the current value of 'x'.
  let val1 = 5 * x;
  let val2 = x * x;

  // We are calling the 'cal' function with 'val1', 'val2', and the operation '+'.
  // The result of the calculation is stored in the variable 'res'.
  let res = cal(val1, val2, "+");

  // We add the result to the 'myArr' array.
  myArr.push(res);
}

// We display the final 'myArr' array in the console.
console.log(myArr);

// We are defining a function called 'cal' that takes three parameters - 'a', 'b', and 'op'.
function cal(a, b, op) {
  // We check if the value of 'op' is equal to '-' (subtraction).
  if (op == "-") {
    // If it is, we subtract 'b' from 'a' and return the result.
    return a - b;
  } else {
    // If 'op' is not '-', we assume it is addition.
    // We add 'a' and 'b' together and return the result.
    return a + b;
  }
}
