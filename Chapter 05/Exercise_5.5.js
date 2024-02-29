// We are creating an empty grid to store numbers in rows and columns.
const grid = [];

// We are deciding how many cells (numbers) our grid should have in total.
const cells = 64;

// We are setting a counter to keep track of the numbers we want to put in the grid.
let counter = 0;

// We are using a variable 'row' to represent each row in the grid.
let row;

// We are using a loop that goes through each cell.
for (let x = 0; x < cells + 1; x++) {
    // We are checking if the current number is a multiple of 8 (divisible by 8).
    if (counter % 8 == 0) {
        // If it is, and if 'row' is not empty, we add the row to the grid.
        if (row != undefined) {
            grid.push(row);
        }
        // We create a new empty row for the next set of 8 numbers.
        row = [];
    }

    // We are increasing the counter by 1.
    counter++;

    // We store the current value of the counter in a variable 'temp'.
    let temp = counter;

    // We add the current value to the 'row'.
    row.push(temp);
}

// We display the grid in a special table format in the console.
console.table(grid);
