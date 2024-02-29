// We have a variable 'test' assigned to an anonymous function (function expression) that takes a parameter 'val'.
const test = function(val){
    // We are logging the value of 'val'.
    console.log(val);
};

// We are calling the function 'test' with the argument 'hello 1'.
test('hello 1');

// We have a named function called 'test1' that takes a parameter 'val'.
function test1(val){
    // We are logging the value of 'val'.
    console.log(val);
}

// We are calling the function 'test1' with the argument 'hello 2'.
test1("hello 2");
