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

// Call the reloader function to log the initial state of the list
reloader();

// Function to log the name and status of each task in the list
function reloader() {
    myList.forEach((el) => {
        console.log(`${el.name} = ${el.status}`);
    });
}
