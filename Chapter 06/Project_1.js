// We have a variable 'main' assigned to an anonymous function named 'counter' that takes a parameter 'i'.
const main = function counter(i) {
    // We are logging the current value of 'i'.
    console.log(i);

    // Base case: If 'i' is less than 10, call the 'counter' function with 'i' incremented by 1.
    if (i < 10) {
        return counter(i + 1);
    }

    // If 'i' is not less than 10, return to exit the recursion.
    return;
};

// We are calling the 'main' function with the initial argument 0.
main(0);
