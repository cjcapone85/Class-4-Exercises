// steps 
// 1 create a function
// 2 function should accept an array as argument 
// 3 function should return number of true values in the array

const array= [
    true,
    false,
    true,
    true,
    false
];

//Code
function countTrue(array) {
    console.log("array:");
};



//console.log(array);
const count1 = array.filter(value => value === true).length;
console.log(count1);


//test cases
// countTrue([true, false, false, true, false])    ➞    2

// countTrue([false, false, false, false])    ➞    0

// countTrue([])    ➞    0












// ## Exercise #2: Intermediate

// **Aim**: Create a function that returns the number of true values in an array.

// _Examples_

// ```js
// countTrue([true, false, false, true, false])    ➞    2

// countTrue([false, false, false, false])    ➞    0

// countTrue([])    ➞    0
// ```

// _Notes_

// - Return 0 if given an empty array.
// - All array items are of the type bool (true or false).
