// Create a new Promise object called myPromise
const myPromise = new Promise((resolve, reject) => {
    // Resolve the Promise with the string "Start Counting"
    resolve("Start Counting");
});

// Define a function called counter that logs the given value to the console
function counter(val){
    console.log(val);
}

// Chain multiple .then() methods to the myPromise object to handle the resolved value sequentially
myPromise
  // The first .then() method is called when the Promise is resolved
  .then(value => {
    // Call the counter function with the resolved value and return "one"
    counter(value); 
    return "one";
  })
  // The second .then() method is called with the value returned from the previous .then() method
  .then(value => {
    // Call the counter function with the returned value and return "two"
    counter(value);
    return "two";
  })
  // The third .then() method is called with the value returned from the previous .then() method
  .then(value => {
    // Call the counter function with the returned value and return "three"
    counter(value);
    return "three";
  })
  // The fourth .then() method is called with the value returned from the previous .then() method
  .then(value => {
    // Call the counter function with the returned value
    counter(value);
  });
