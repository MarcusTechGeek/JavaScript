// Creating an array with duplicate names.
const arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

// Using the filter method to remove duplicate names and create a new array.
const arr2 = arr.filter((value, index, array) => {
    // Logging the current name, its index, and the first occurrence index in the array.
    console.log(value, index, array.indexOf(value));

    // Returning true only for the first occurrence of each name, filtering out duplicates.
    return array.indexOf(value) === index;
});

// Displaying the new array without duplicate names.
console.log(arr2);
