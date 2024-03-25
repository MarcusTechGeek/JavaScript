let myList = [
    {
        "name": "Learn JavaScript",
        "status": true
    },
    {
        "name": "Try JSON",
        "status": false
    }
];

// Convert the array of objects to a JSON-formatted string
const newStr = JSON.stringify(myList);

// Parse the JSON string back into a JavaScript object
const newObj = JSON.parse(newStr);

// Iterate through the elements of newObj and log each element to the console
newObj.forEach((el) => {
    console.log(el);
});
