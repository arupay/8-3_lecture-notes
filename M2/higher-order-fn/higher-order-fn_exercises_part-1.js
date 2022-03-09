/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */

function truthy() {
  return true;
}

//Not  a high order function, because they do not receive the function as a parameter
//nor do they return a function as a parameter.

function falsy() {
  return !truthy();
}

falsy(); //> false

// not a high order funciton because it's returning a boolean value NOT A FUNCTION

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */

function left() {
  return "Left";
}

function right() {
  return "Right";
}
//Both of the above functions return string and thus are not high order functions

function go(goLeft = true) {
  return goLeft ? left : right;
}

//this is a high order function because ternary operator are used to return functions

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */

const directions = [];

function storeDirections(direction) {
  directions.push(direction);
}

//its not because parameters are not functions and it returns undefined (default return because its missing a return)

function go(direction, operation) {
  //function declaration
  operation(direction);
  return direction;
}

// this is a high order funciton because the operation parameter is a funciton

go("Left", storeDirections); // we are calling the function here
go("Right", storeDirections);
go("Up", storeDirections);
console.log(directions); //> ["Left", "Right", "Up"]
go("Left", storeDirections);
go("Right", storeDirections);
go("Up", storeDirections);
// console.log(directions); //> ["Left", "Right", "Up"]

/**
 * Take a look at the higher order function below.
 * The transform() function expects, as its second argument, a function that accepts at least one argument.
 */

function transform(text, fn) {
  if (typeof fn !== "function") {
    return text;
  }

  return fn(text);
}

// function (text) {
//   if (text === "left")
//   return "LEFT"
// }

// function (text) {
//   if (text === "RiGhT")
//   return "right"
// }

// function (text) {
//   if (text === "left right left"){
//     return "left-right-left"
//   }
// }

// function (text){
//   if (text = "up Down left"){
//     return "UDL"
//   }

console.log(
  transform("left", function (text) {
    if (text === "left") {
      return "LEFT";
    }
  })
);
/**
 * Use the function above to transform the text in the following ways. For each line below, you will need to write an anonymous function.
 *
 *
 * "left" -> "LEFT"
 * "RiGhT" -> "right"
 * "left right left" -> "left-right-left"
 * "up Down left" -> "UDL"
 */

console.log(
  transform("up Down left", function (text) {
    // split each word into an array, using the whitespace as the delimiter
    const textArr = text.split(" ");
    // create a temp variable to store result
    let result = "";
    // loop through the array
    for (let word of textArr) {
      // add the first char of each word to the result
      result += word[0];
    }
    // capitalize the result
    result = result.toUpperCase(); // strings can't be mutated

    return result;
  })
);

/**
 * Write a fn called each which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The each fn loops through the given array and runs the callback function on each of it's elements.
 */
function each(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    // for (let e of arr) { // for...of
    // run the function on each element
    fn(arr[i]);
    // fn(e); // for...of
  }
}

// The following call to each should print
// 1
// 2
// 3
// 4
// each([1, 2, 3, 4], function (value) {
//   const transformedValue = value;
//   console.log(transformedValue);
// });

// The following call to each should print
// 2
// 4
// 6
// 8
// each([1, 2, 3, 4], function (value) {
//   let transformedValue = value * 2;
//   console.log(transformedValue);
// });

/**
 * Write a fn called map which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The map fn should return a new array where each new element is the return value from the anonymous function with the argument as the original element value.
 */
function map(arr, fn) {
  let newArr = [];
  // loop through the arr
  for (let e of arr) {
    // run the function on the element
    newArr.push(fn(e));
  }

  return newArr;
}

// The following call to map should return
// [2, 4, 6, 8];
// console.log(
//   map([1, 2, 3, 4], function (value) {
//     const transformedValue = value * 2;
//     return transformedValue;
//   }),
// );

/**
 * Write a fn called reject which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The reject fn should return a new array containing all of the values that do not return true to the callback
 */
function reject(arr, isAccepted) {
  // create a new arr empty
  let rejects = [];
  // loop through the array
  for (let e of arr) {
    // store the callback fn return value in a variable
    // let isAccepted = fn(e);
    // if the variable is false
    if (!isAccepted(e)) {
      // add the value to the new array
      rejects.push(e);
    }
  }

  // return the new arr
  return rejects;
}

// The following call to reject should return
// [1, 2];
// console.log(
//   reject([1, 2, 3, 4], function (value) {
//     const transformedValue = value > 2;
//     return transformedValue;
//   }),
// );

// The following call to reject should return
// [3, 5];
// console.log(
//   reject([2, 3, 4, 5], function (value) {
//     const transformedValue = value % 2 === 0;
//     return transformedValue;
//   }),
// );
