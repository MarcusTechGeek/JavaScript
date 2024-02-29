// We have an object called 'obj' with three properties (a, b, c) and their corresponding values.
const obj = {
    a: 1,
    b: 2,
    c: 3
};

// We are using a loop to go through each property in 'obj'.
for (let prop in obj) {
    // We are showing the property name and its value in the console.
    console.log(prop, obj[prop]);
}

// We have an array called 'arr' with three elements (strings "a", "b", "c").
const arr = ["a", "b", "c"];

// We are using a loop to go through each index in 'arr'.
for (let w = 0; w < arr.length; w++) {
    // We are showing the index and the element at that index in the console.
    console.log(w, arr[w]);
}

// We are using another type of loop called 'for...in' to go through each index in 'arr'.
for (el in arr) {
    // We are showing the index and the element at that index in the console.
    console.log(el, arr[el]);
}
