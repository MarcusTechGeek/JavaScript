// Creating a new Date object set to a future date: June 15, 2025.
let future = new Date(2025, 5, 15);
console.log(future);

// Defining an array containing names of months.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Extracting day, month, and year components from the future date.
let day = future.getDate(); // Getting the day of the month.
let month = future.getMonth(); // Getting the month (0-based index).
let year = future.getFullYear(); // Getting the year.

// Creating a custom date string using month names, day, and year.
// Note: JavaScript's Date object uses 0-based indexing for months.
// We need to subtract 1 from the month index to get the correct month name from the array.
let myDate = `${months[month-1]} ${day} ${year}`;
console.log(myDate);
