const myArr = [1, 2, 3];

// Creating an array bigArr with three references to myArr
const bigArr = [myArr, myArr, myArr];

// Accessing and logging the element at index 1 of the second array in bigArr
console.log(bigArr[1][1]); // Outputs: 2

// Accessing and logging the element at index 1 of the first array in bigArr
console.log(bigArr[0][1]); // Outputs: 2

// Accessing and logging the element at index 1 of the third array in bigArr
console.log(bigArr[2][1]); // Outputs: 2
