// // Here's an example of synchronous code in JavaScript:

// // Define three functions
// function firstTask() {
//     console.log("Task 1");
//   }
  
//   function secondTask() {
//     console.log("Task 2");
//   }
  
//   function thirdTask() {
//   console.log("Task 3");  
//   }
  
//   // Execute the functions
//   firstTask();
//   secondTask();
//   thirdTask();


// // Do one thing and putting a wait on it before it complets the task

// function someLongRunningFunction() {
//     let start = Date.now();
//     while (Date.now() - start < 5000) {
//         // do nothing
//     }
//     return "Hello";
// }

// console.log('Starting...');

// let result = someLongRunningFunction();
// console.log(result);

// console.log('...Finishing');


// // Example of an asynchronous program using the setTimeout method:

// console.log("Start of script");

// setTimeout(function() {
//   console.log("First timeout completed");
// }, 2000);

// console.log("End of script");


// // Simple example for callback function to handle an asynchronous operation 

// // Declare function
// function fetchData(callback) {
//     setTimeout(() => {
//       const data = {name: "John", age: 30};
//       callback(data);
//     }, 3000);
//   }
  
//   // Execute function with a callback
//   fetchData(function(data) {
//     console.log(data);
//   });
  
//   console.log("Data is being fetched...");

// Here is an example of callback hell:

// // Define getData function
// function getData(callback) {
//     // Logic to fetch data
//     // Example:
//     setTimeout(function() {
//       var data = 'data from getData';
//       callback(data);
//     }, 1000); // Simulating asynchronous data retrieval
//   }
  
//   // Define getMoreData function
//   function getMoreData(a, callback) {
//     // Logic to fetch more data using 'a'
//     // Example:
//     setTimeout(function() {
//       var moreData = 'more data based on ' + a;
//       callback(moreData);
//     }, 1000); // Simulating asynchronous data retrieval
//   }
  
//   // Define getEvenMoreData function
//   function getEvenMoreData(b, callback) {
//     // Logic to fetch even more data using 'b'
//     // Example:
//     setTimeout(function() {
//       var evenMoreData = 'even more data based on ' + b;
//       callback(evenMoreData);
//     }, 1000); // Simulating asynchronous data retrieval
//   }
  
//   // Define getEvenEvenMoreData function
//   function getEvenEvenMoreData(c, callback) {
//     // Logic to fetch even even more data using 'c'
//     // Example:
//     setTimeout(function() {
//       var evenEvenMoreData = 'even even more data based on ' + c;
//       callback(evenEvenMoreData);
//     }, 1000); // Simulating asynchronous data retrieval
//   }
  
//   // Define getFinalData function
//   function getFinalData(d, callback) {
//     // Logic to fetch final data using 'd'
//     // Example:
//     setTimeout(function() {
//       var finalData = 'final data based on ' + d;
//       callback(finalData);
//     }, 1000); // Simulating asynchronous data retrieval
//   }
  
//   // Usage:
//   getData(function(a) {
//     getMoreData(a, function(b) {
//       getEvenMoreData(b, function(c) {
//         getEvenEvenMoreData(c, function(d) {
//           getFinalData(d, function(finalData) {
//             console.log(finalData);
//           });
//         });
//       });
//     });
//   });
  
// // Example of a Promise:

// // Initialize a promise
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello from the promise!");
//     }, 2000);
// });
//   console.log(myPromise);
  

// // Here is an example of how you might consume a promise:

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     //code here will be executed regardless of the status
//     //of a promise (fulfilled or rejected)
//   });

// // here is an example of promise chaining 

// fetch('https://example.com/data')
//     .then(response => response.json())
//     .then(data => processData(data))
//     .then(processedData => {
//         // do something with the processed data
//     })
//     .catch(error => console.log(error))

// // Another way of handling errors in a promise is by using the "try-catch" block inside a .then method.

// fetch("https://api.github.com/users/octocat")
//   .then((response) => response.json())
//   .then((data) => {
//     try {
//       //processing received data
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   })
//   .catch((error) => console.log(error));

// // How to Use the Promise.all Method

// let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
// let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
// let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

// Promise.all([promise1, promise2, promise3])
// .then((values) => {
//   console.log(values);
// })

// // How to Use the Fetch API with Promises

// fetch('https://some-api.com/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// Here's an example of how you can use async/await:

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  }
  
  getData();