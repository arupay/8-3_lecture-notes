/**
 * 1. Use object shorhand to construct an object using all of the following variables.
 */
const first = "Nicole";
const middle = "Aunapu";
const last = "Mann";

// create an object with above data in key value pair

const fullName = {
  first,
  middle,
  last,
};

console.log(fullName);
//Object shorthand converts the variable assignment operator "=" into key/val associator operator ":"
/**
 * 2. What are some of the benefits of using object shorthand? Are there any limitations? Write a brief response below.
 */

/**
 * 3. The function below expects that sometimes name will not be provided. Update the greet() function so that it uses default parameters.
 */
function greet(name = "space cadet") {
  result = `Welcome to NASA, ${name}!`;
  return result;
}

console.log(greet("Tony"));

greet("Jessica"); //> "Welcome to NASA, Jessica!"
greet(); //> "Welcome to NASA, space cadet!"

/**
 * 4. What are some of the benefits of using default parameters? Are there any limitations? Write a brief response below.
 */
