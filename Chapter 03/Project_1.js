const theList=[];
theList.pop();  // Remove the last element from the array
theList.shift();  // Remove the first element from the array
theList.unshift("FIRST");  // Add 'FIRST' to the beginning of the array
theList[3] = "hello World";  // Set the value at index 3 to 'hello World'
theList[2] = "MIDDLE";  // Set the value at index 2 to 'MIDDLE'
theList.push("LAST");  // Add 'LAST' to the end of the array
console.log(theList);  // Log the modified array to the console