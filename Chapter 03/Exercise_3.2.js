// Creating an empty array named myList
const myList = [];

// Adding items to myList: 'Milk', 'Bread', 'Apples'
myList.push("Milk", "Bread", "Apples");

// Using splice to replace 'Bread' with 'Bananas' and 'Eggs' at index 1
myList.splice(1, 1, "Bananas", "Eggs");

// Removing the last element ('Eggs') from myList and storing it in removeLast
const removeLast = myList.pop();
console.log(removeLast); // Logging the removed element

// Sorting myList alphabetically
myList.sort();

// Finding the index of 'Milk' in the sorted myList
console.log(myList.indexOf("Milk"));

// Using splice to insert 'Carrots' and 'Lettuce' at index 1
myList.splice(1, 0, "Carrots", "Lettuce");

// Creating another array myList2 with items 'Juice' and 'Pop'
const myList2 = ["Juice", "Pop"];

// Concatenating myList, myList2, and myList2 again into a new array called finalList
const finalList = myList.concat(myList2, myList2);

// Logging the last index of 'Pop' in finalList
console.log(finalList.lastIndexOf("Pop"));

// Logging the entire finalList array
console.log(finalList);

