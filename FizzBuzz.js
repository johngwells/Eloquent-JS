// FizzBuzz
/*
num divisible by 3 - Fizz
num divisible by 5 - Buzz
num divisible by 3 & 5 FizzBuzz
print all numbers 1 - 100
*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, 'FizzBuzz');
    } else if (i % 3 === 0) {
      console.log(i, 'Fizz');
    } else if (i % 5 === 0) {
      console.log(i, 'Buzz');
    } else {
      console.log(i, 'none');
    }
  }
}
fizzBuzz(100);