// We are creating an empty table called 'myTable' to store the multiplication results.
const myTable = [];

// We are deciding how many rows and columns our table should have.
const numm = 10;

// We are using a loop to go through each row.
for(let x=0; x<numm; x++){
    // We are creating an empty row called 'temp' to store multiplication results for this row.
    const temp = [];

    // We are using another loop to go through each column in the current row.
    for(let y = 0; y<numm; y++){
        // We are multiplying the current row number 'x' by the current column number 'y'.
        // The result is added to the 'temp' row.
        temp.push(x * y);
    }

    // We are adding the row with multiplication results to the 'myTable'.
    myTable.push(temp);
}

// We are displaying the table in a special table format in the console.
console.table(myTable);
