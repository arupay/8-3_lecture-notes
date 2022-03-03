/**
 * 1. What is destructuring? Write a brief response below.
 */

// unpacking individual parts of an object or array
// kind of the inverse of object shorthand

/**
 * 2. Use destructuring to create three new variables from the following array.
 */
const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
const [astro1, astro2, astro3] = astronauts;

<<<<<<< HEAD
console.log(astro2);
=======
console.log(typeof astro2);

// You can tell we are using destructuring when there is a [] or a {} on the lhs of an =
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1

/**
 * 3. Use destructuring to create three new variables that represent each key-value pair in the following object.
 */
const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",
};

const { occupation } = astronaut;
console.log(occupation);
<<<<<<< HEAD
=======

const getName = () => ["myra", "smith"];
const [firstName, lastName] = getName();

>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1
/**
 * 4. What are some benefits of using destructuring? Are there any limitations? Write a brief response below.
 */

/**
 * 5. Apply destructuring to the following function.
 */
<<<<<<< HEAD
function getAstronautActivityStatus(astronaut) {
  let { isActive, name} = astronaut
  let result = "";
  if isActive {
    result = `${name} is active.`;
  } else { 
=======
function getAstronautActivityStatus({ isActive, name }) {
  let result = "";
  if (isActive) {
    result = `${name} is active.`;
  } else {
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1
    result = `${name} is not active.`;
  }
  return result;
}

<<<<<<< HEAD

}

=======
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1
// const astronaut = {
//   name: "Jessica Watkins",
//   isActive: true,
//   occupation: "Geologist",
// };
getAstronautActivityStatus(astronaut); //> "Jessica Watkins is active."
