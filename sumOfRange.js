/*
Write a range function that takes two arguments, start and end, and returns an array containing 
all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates 
the “step” value used when building the array. If no step is given, the elements go up by increments 
of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

// returns an array containing all numbers start up to/and end
function range(start, end, step) {
  let array = [];
<<<<<<< HEAD
<<<<<<< HEAD
  var step = step || 1;
  // loop that creates numbers and add to the arrays
  for (let i = start; start <= end; start += step) {
=======
  // loop that creates numbers and add to the array
  for (var i = start; start <= end; start++) {
>>>>>>> ff55e66... exercise sumOfRange
=======
  var step = step || 1;
  // loop that creates numbers and add to the arrays
  for (let i = start; start <= end; start += step) {
>>>>>>> 2ff6996... complete bonus exercise
    array.push(start);
  }
  return array;
}
<<<<<<< HEAD
<<<<<<< HEAD
console.log(range(1, 10));
=======
// console.log(range(1, 10));
>>>>>>> ff55e66... exercise sumOfRange
=======
console.log(range(1, 10));
>>>>>>> 2ff6996... complete bonus exercise

// takes array of numbers & returns the sum
function sum(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum;
}

console.log(sum(range(1, 10)));