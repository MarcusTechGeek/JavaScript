// We have a global variable 'val' set to the string "1000".
let val = "1000";

// Immediately-Invoked Function Expression (IIFE) with a local variable 'val' set to the string "100".
(function () {
    // Inside the IIFE, we have a local variable 'val' with the string "100".
    let val = "100";
    console.log(val); // This will log "100".
})();

// Another IIFE that defines a local variable 'val' with the string "Marcus".
// The value of 'val' is returned and stored in the variable 'result'.
let result = (function () {
    // Inside the IIFE, we have a local variable 'val' with the string "Marcus".
    let val = "Marcus";
    return val;
})();
console.log(result); // This will log "Marcus".

// Logging the value of the global variable 'val', which is still "1000".
console.log(val); // This will log "1000".

// Another IIFE that takes a parameter 'val' and logs a string with the provided value.
// It's immediately invoked with the argument "Marcus".
(function (val) {
    console.log(`My name is ${val}`);
})("Marcus"); // This will log "My name is Marcus".
