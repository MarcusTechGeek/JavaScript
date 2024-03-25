// Define an array of allowed passwords
const allowed = ["1234", "pass", "apple"];

// Define a function called passwordChecker that checks if a given password is allowed
function passwordChecker(pass) {
    // Check if the password is included in the allowed array
    return allowed.includes(pass);
}

// Define a function called login that returns a Promise
function login(password) {
    return new Promise((resolve, reject) => {
        // Check if the password is allowed
        if (passwordChecker(password)) {
            // If allowed, resolve the Promise with an object containing status: true
            resolve({
                status: true
            });
        } else {
            // If not allowed, reject the Promise with an object containing status: false
            reject({
                status: false
            });
        }
    });
}

// Define a function called checker that calls the login function and handles the Promise
function checker(pass) {
    // Call the login function with the given password
    login(pass)
        // If login succeeds, handle the resolved value (token)
        .then(token => {
            // Log "Approve:" and the token to the console
            console.log("Approve:");
            console.log(token);
        })
        // If login fails, handle the rejected value
        .catch(value => {
            // Log "Reject:" and the rejection reason to the console
            console.log("Reject:");
            console.log(value);
        });
}

// Call the checker function with two different passwords to test the login functionality
checker("1234"); // Should log "Approve:" and the token
checker("wrong"); // Should log "Reject:" and the rejection reason
