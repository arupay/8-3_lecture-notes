// Setup: You want to know whether the train or your car is a faster commute.
// You alternate transportation methods, recording your commute time in minutes every day.

const carCommuteTimes = [43, 48, 39, 37, 47, 46, 46, 35, 42, 49];
const trainCommuteTimes = [30, 62, 41, 39, 38, 31, 51, 53, 34, 40];

// Challenge: write a program that determines which commute is faster ON AVERAGE.
// How will you know if you've succeeded?
//   -> Use node to execute this file. You should see output that logs out which commute is faster on average

// Hint: write a function that computes the average of an array of numbers.
//   Use this function to find the average commute time for the train and for your car.

function getAvg(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum / nums.length;
}

function fasterCommute(commute1, commute2) {
  if (getAvg(commute1) > getAvg(commute2)) {
    return `The first commute method is the faster commute on average`;
  } else if (getAvg(commute1) === getAvg(commute2)) {
    return `Both commutes are the same average time!`;
  } else {
    return `The second commute method is the faster commute on average`;
  }
}

console.log(fasterCommute(carCommuteTimes, trainCommuteTimes));

console.log(getAvg(carCommuteTimes));
console.log(getAvg(trainCommuteTimes));
