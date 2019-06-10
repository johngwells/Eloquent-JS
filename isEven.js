<<<<<<< HEAD
// Exercise - Recursion - the number is even or odd. Address negative numbers
=======
// Excersice - Recursion - the number is even or odd. Address negative numbers
>>>>>>> c6e9587... excercise completed
// as well as you can't use %

function isEven(num) {
  if (num === 0) {
    return true;
  }
  else if (num === 1) {
    return false;
  }
  // turn negative to positive
  else if (num < 0) {
    return isEven(-num);
  } 
  // subtracts to get 1 or 0
  else {
    return isEven(num - 2);
  }
}

console.log(isEven(-2));
console.log(isEven(1));
console.log(isEven(-5));
console.log(isEven(10));