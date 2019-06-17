/*
For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array 
that has the same elements in the inverse order. The second, reverseArrayInPlace, 
does what the reverse method does: it modifies the array given as argument by 
reversing its elements. Neither may use the standard reverse method.
*/

// Exercise 1 - Array out
function reverseArray(array) {
  var newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray(['if', 'maybe', 'so', 'never', 'yes']));

// Exercise 2 - Array In
function reverseArrayInPlace(array) {
  for (var i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
    // set a variable equal to the first
    let firstElement = array[i];
    // set the first element equal to the last
    array[i] = array[array.length - 1 - i];
    // last element equal to the first;
    array[array.length - 1 - i] = firstElement;
  }
  return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace(['if', 'maybe', 'so', 'never', 'yes']));