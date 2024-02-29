// We are defining a function called 'calcFactorial' that takes a parameter 'nr'.
function calcFactorial(nr) {
    // We are logging the current value of 'nr'.
    console.log(nr);

    // Base case: If 'nr' is 0, return 1 (factorial of 0 is 1).
    if (nr === 0) {
        return 1;
    } else {
        // Recursive case: Return 'nr' multiplied by the result of 'calcFactorial' with a decremented 'nr'.
        return nr * calcFactorial(--nr);
    }
}

// We are logging the result of calling 'calcFactorial' with the argument 4.
console.log(calcFactorial(4));
