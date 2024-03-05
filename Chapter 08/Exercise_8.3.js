// Creating an array with numerical values.
const myArr = [1, 4, 5, 6];

// Using the map method with a regular function to double each element in the array.
const myArr1 = myArr.map(function(ele) {
    return ele * 2;
});
console.log(myArr1);

// Using the map method with an arrow function to achieve the same result, doubling each element.
const myArr2 = myArr.map((ele) => ele * 2);
console.log(myArr2);
