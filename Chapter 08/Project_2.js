// Define the end date for the countdown.
const endDate = "Sept 1 2022";

// Function to calculate the countdown remaining time.
function countdown() {
    // Calculate the total milliseconds between the end date and the current date.
    const total = Date.parse(endDate) - new Date();

    // Calculate the remaining days, hours, minutes, and seconds.
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / 1000 / 60) % 60);
    const secs = Math.floor((total / 1000) % 60);

    // Return an object containing the remaining time components.
    return {
        days,
        hrs,
        mins,
        secs
    };
}

// Function to update the countdown display.
function update() {
    // Retrieve the countdown values.
    const temp = countdown();

    // Initialize an empty string to store the countdown output.
    let output = "";

    // Loop through the countdown values and concatenate them into a string.
    for (const property in temp) {
        output += (`${property}: ${temp[property]} `);
    }

    // Print the countdown output to the console.
    console.log(output);

    // Schedule the update function to run again after 1 second.
    setTimeout(update, 1000);
}

// Start the countdown update process.
update();
