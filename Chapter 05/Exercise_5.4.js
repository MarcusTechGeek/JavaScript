// We are creating an empty table called 'myTable' to store numbers.
const myTable = [];

// We are deciding how many rows and columns our table should have.
const rows = 4;
const cols = 7;

// We are setting a counter to keep track of the numbers we want to put in the table.
let counter = 0;

// We are using a loop that goes through each row.
for (let y = 0; y < rows; y++) {
    // We are creating an empty row called 'tempTable' to store numbers for this row.
    let tempTable = [];

    // We are using another loop that goes through each column in the current row.
    for (let x = 0; x < cols; x++) {
        // We are increasing the counter by 1 and putting the current value in the 'tempTable'.
        counter++;
        tempTable.push(counter);
    }

    // We are adding the row with numbers to the 'myTable'.
    myTable.push(tempTable);
}

// We are displaying the table in a special table format in the console.
console.table(myTable);
