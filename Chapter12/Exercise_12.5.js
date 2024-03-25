function test(val) {
    try {
        if (isNaN(val)) {
            // If the provided value is not a number, throw an exception
            throw "Not a number";
        } else {
            // If the value is a number, log "Got number"
            console.log("Got number");
        }
    } catch (e) {
        // Catch and log the exception if thrown
        console.error(e);
    } finally {
        // Regardless of whether an exception was thrown or not, log "Done" along with the value
        console.log("Done " + val);
    }
}

// Call the test function with two different values
test("a");   // This will throw an exception and log the error message
test(100);   // This will log "Got number" and "Done 100"
