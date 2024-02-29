// We have a variable 'start' set to the value 10.
let start = 10;

// We are defining a recursive function called 'loop1' that takes a parameter 'val'.
function loop1(val) {
    // We are logging the current value of 'val'.
    console.log(val);

    // Base case: If 'val' is less than 1, return and exit the recursion.
    if (val < 1) {
        return;
    } else {
        // Recursive case: Call 'loop1' with 'val' decremented by 1.
        return loop1(val - 1);
    }
}

// We are calling 'loop1' with the initial value of 'start'.
loop1(start);

// We are defining another recursive function called 'loop2' that takes a parameter 'val'.
function loop2(val) {
    // We are logging the current value of 'val'.
    console.log(val);

    // Base case: If 'val' is greater than 0, decrement 'val' and call 'loop2' with the updated value.
    if (val > 0) {
        val--;
        return loop2(val);
    } else {
        // If 'val' is not greater than 0, return and exit the recursion.
        return;
    }
}

// We are calling 'loop2' with the initial value of 'start'.
loop2(start);
