// // Example 1 (sendItem)

// // Store color: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("color", "White");

// // Log the session storage object to the console:
// console.log(sessionStorage);

// // The invocation above will return:
// {color: "Pink"}

// sessionStorage.setItem("Type","Car");

// console.log(sessionStorage)

// //Example 2 

// // Store color: "Pink" inside the browser's local storage object:
// localStorage.setItem("color", "Pink");

// // Log the local storage object to the console:
// console.log(localStorage);

// // The invocation above will return:
// {color: "Pink"}

//Examle 3

// // Store myBio object inside the browser's session storage object:
// sessionStorage.setItem("myBio", { name: "Oluwatobi" });

// // Log the session storage object to the console:
// console.log(sessionStorage);

// // Example 4: How to store serialized objects in the web storage

// // Store myBio object inside the browser's session storage object:
// sessionStorage.setItem("myBio", JSON.stringify({ name: "Oluwatobi" }));

// // Log the session storage object to the console:
// console.log(sessionStorage);

// // Example 1: How to get the name of an item in the session storage object

// // Store carColor: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the session storage object:
// sessionStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the session storage object:
// sessionStorage.setItem("laptopColor", "White");

// // Get the name of the item at index 1:
// console.log(sessionStorage.key(1));

// //Example 2: How to get the name of an item in the local storage object

// // Store carColor: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the session storage object:
// sessionStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the session storage object:
// sessionStorage.setItem("laptopColor", "White");

// // Get the name of the item at index 1:
// sessionStorage.key(1);


// // Example 1: How to get data from the session storage object

// // Store color: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("color", "Pink");

// // Get color's value from the session storage:
// sessionStorage.getItem("color");

// // Example 2: How to get data from the local storage object

// // Store color: "Pink" inside the browser's local storage object:
// localStorage.setItem("color", "Pink");

// // Get color's value from the local storage:
// console.log(localStorage.getItem("color"));

// // Example 1: How to verify the number of items in the session storage object

// // Store carColor: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the session storage object:
// sessionStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the session storage object:
// sessionStorage.setItem("laptopColor", "White");

// // Verify the number of items in the session storage:
// console.log(sessionStorage.length);

// // Example 2: How to verify the number of items in the local storage object

// // Store carColor: "Pink" inside the browser's local storage object:
// localStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the local storage object:
// localStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the local storage object:
// localStorage.setItem("laptopColor", "White");

// // Verify the number of items in the local storage:
// console.log(localStorage.length);

// //Example 1: How to remove data from the session storage object

// // Store carColor: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the session storage object:
// sessionStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the session storage object:
// sessionStorage.setItem("laptopColor", "White");

// // Remove the pcColor item from the session storage:
// sessionStorage.removeItem("pcColor");

// // Confirm whether the pcColor item still exists in the session storage:
// console.log(sessionStorage.getItem("pcColor"));

// Example 2: How to remove data from the local storage object

// Store carColor: "Pink" inside the browser's local storage object:
localStorage.setItem("carColor", "Pink");

// Store pcColor: "Yellow" inside the local storage object:
localStorage.setItem("pcColor", "Yellow");

// Store laptopColor: "White" inside the local storage object:
localStorage.setItem("laptopColor", "White");

// Remove the pcColor item from the local storage:
localStorage.removeItem("pcColor");

// Confirm whether the pcColor item still exists in the local storage:
console.log(localStorage.getItem("pcColor"));

// // Example 1: How to clear all items from the session storage object

// // Store carColor: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the session storage object:
// sessionStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the session storage object:
// sessionStorage.setItem("laptopColor", "White");

// // Clear all items from the session storage:
// sessionStorage.clear();

// // Confirm whether the session storage still contains any item:
// console.log(sessionStorage);

// // Example 2: How to clear all items from the local storage object

// // Store carColor: "Pink" inside the browser's local storage object:
// localStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the local storage object:
// localStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the local storage object:
// localStorage.setItem("laptopColor", "White");

// // Clear all items from the local storage:
// localStorage.clear();

// // Confirm whether the local storage still contains any item:
// console.log(localStorage);