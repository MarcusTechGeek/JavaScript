let val = 5;

// Adding the result of calling the adder function three times to val
val += adder();
val += adder();
val += adder();

// Logging the final value of val to the console
console.log(val);

// Defining the adder function
function adder() {
    // Initializing a local variable counter with the value of val
    let counter = val;

    // Incrementing counter in a loop val times
    for (let i = 0; i < val; i++) {
        counter++;
    }

    // Returning the updated counter
    return counter;
}
