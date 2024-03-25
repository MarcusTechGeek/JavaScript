// Initialize a global counter variable
let cnt = 0;

// Define a function called outputTime that returns a Promise
function outputTime(val) {
    return new Promise(resolve => {
        // Asynchronously execute a function after a delay of 1000ms (1 second)
        setTimeout(() => {
            // Increment the counter variable
            cnt++;
            // Resolve the Promise with a string containing the input value and the current counter value
            resolve(`x value ${val} counter:${cnt}`);
        }, 1000);
    });
}

// Define an asynchronous function called aCall that takes a parameter val
async function aCall(val) {
    // Log a message indicating that the function is ready to execute, along with the current counter value
    console.log(`ready ${val} counter:${cnt}`);
    // Wait for the outputTime function to resolve, then assign the result to the variable res
    const res = await outputTime(val);
    // Log the result returned from the outputTime function
    console.log(res);
}

// Loop from x = 1 to x = 3
for (let x = 1; x < 4; x++) {
    // Call the aCall function with the current value of x
    aCall(x);
}
