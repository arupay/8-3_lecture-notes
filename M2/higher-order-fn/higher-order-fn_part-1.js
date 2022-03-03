//what is a higher order funciton

// returns fn, accepts fn as parameter, common programming pattern, endlesslesly useful

//why do they exist?  because they are useful for passing info in dynamic/modular way

//Example

// function isCold(temp, coldTemp) {
//   if (temp > coldTemp) {
//     return false;
//   }
//   return true;
// }
// degrees60F = isCold(60, 50);
// console.log(degrees60F);

// function outer() {
//   function inner() {
//     return "I'm the inner fn";
//   }
//   // returning a funtion without explicitly calling it
//   //does not call the function
//   //it just returns the function
// }

// console.log(outer()); //returns: [Function: inner]
// // Function is the type of reutn value
// //inner is the name of the return value

// const outerReturnVal = outer();
// const innerReturnVal = outerReturnVal();

// console.log(outerReturnVal);
// console.log(innerReturnVal);

function describeColdWeather(fn) {
  const message = "it's cold outside";
  return fn(message);
}

function describeHotWeather(fn) {
  const message = "It's hot outside";
  return fn(message);
}

const describeWeather = (str) => {
  return `Today's Weather Report: ${str}`;
};

// console.log(describeColdWeather(describeWeather));
// console.log(describeHotWeather(describeWeather));

function outerAnon() {
  return function () {
    return "i'm the inner fn";
  };
}

const calculate = (a, b, fn) => {
  console.log(fn);
  const res = fn(a, b);

  if (typeof res !== "number") {
    return `ERROR`;
  }

  return res;
};

const exponent = (a, b) => {
  return Math.pow(a, b);
};

console.log(calculate(39, 4, exponent));
