/**
 * 1. Use object shorhand to construct an object using all of the following variables.
 */
const first = "Nicole";
const middle = "Aunapu";
const last = "Mann";

<<<<<<< HEAD
// create an object with above data in key value pair

=======
// create an object with three key value pairs: { first: "Nicole", middle: "Aunapu", last: "Mann" }
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1
const fullName = {
  first,
  middle,
  last,
};

<<<<<<< HEAD
console.log(fullName);
//Object shorthand converts the variable assignment operator "=" into key/val associator operator ":"
=======
// Object short-hand converts the variable assignment operator "=" into the key/val associator operator ":"

>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1
/**
 * 2. What are some of the benefits of using object shorthand? Are there any limitations? Write a brief response below.
 */

// shorter!

// BUT

// you're stuck with the same names

/**
 * 3. The function below expects that sometimes name will not be provided. Update the greet() function so that it uses default parameters.
 */
<<<<<<< HEAD
// function greet(name = "space cadet") {
//   result = `Welcome to NASA, ${name}!`;
//   return result;
// }
const greet = (name = "space cadet") => `Welcome to Nasa, ${name}`;
console.log(greet("Tony"));

greet("Jessica"); //> "Welcome to NASA, Jessica!"
greet(); //> "Welcome to NASA, space cadet!"
=======
const greet = (name = "space cadet") => `Welcome to NASA, ${name}!`;

console.log(greet("Jessica")); //> "Welcome to NASA, Jessica!"
console.log(greet()); //> "Welcome to NASA, space cadet!"
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1

/**
 * 4. What are some of the benefits of using default parameters? Are there any limitations? Write a brief response below.
 */

// removing conditional logic from our function definitions
// BUT
// you have to be careful about default values that are arrays or objects
