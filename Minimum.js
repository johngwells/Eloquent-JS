<<<<<<< HEAD
<<<<<<< HEAD
// Exercise - Minimum - Create a function like Math.min
=======
// Excersice - Minimum - Create a function like Math.min
>>>>>>> 1f4ef1f... completed Excersise
=======
// Exercise - Minimum - Create a function like Math.min
>>>>>>> 40fc392... fixed spellings

function min(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else if (num1 > num2) {
    return num2;
  } else {
    return null;
  }
}

console.log(min(0, 10));
console.log(min(0, -10));