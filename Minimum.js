// Excersice - Minimum - Create a function like Math.min

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