/*
For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array 
that has the same elements in the inverse order. The second, reverseArrayInPlace, 
does what the reverse method does: it modifies the array given as argument by 
reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(array) {
  var newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['if', 'maybe', 'so', 'never', 'yes']));