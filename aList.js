/*
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3]
as argument. Also write a listToArray function that produces an array from a list. 
Then add a helper function prepend, which takes an element and a list and creates a new list that adds
the element to the front of the input list, and nth, which takes a list and a number and returns the 
element at the given position in the list (with zero referring to the first element) or undefined when
there is no such element.

example:
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
*/

// builds a list structure like the example
function arrayToList() {

}

// Produces an array from a list
function listToArray() {

}

// Add a helper function prepend
function prepend() {
  
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20