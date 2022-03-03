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
