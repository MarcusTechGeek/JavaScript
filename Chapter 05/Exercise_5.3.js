// We are creating an empty list called 'myWork' to store information.
const myWork = [];

// We are using a loop that starts with 1 and goes up to 9.
for (let x = 1; x < 10; x++) {
    // We are checking if 'x' is an odd number (using the % operator).
    let stat = x % 2 ? true : false;

    // We are creating an object with a 'name' and 'status' property.
    // The 'name' is a string that says "Lesson" followed by the current value of 'x'.
    // The 'status' is set based on whether 'x' is odd (true) or even (false).
    let temp = {
        name: `Lesson ${x}`,
        status: stat
    };

    // We are adding the object we just created to the 'myWork' list.
    myWork.push(temp);
}

// We are showing the 'myWork' list in the console.
console.log(myWork);
