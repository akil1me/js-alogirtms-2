// 1-vazifa :

// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

// function num(a, b) {

// }


let arrResult1 = [];

function multiples(a, b) {
  for (let i = 1; i <= b; i++) {
    arrResult1.push(a * i);
  }
  return arrResult1;
}

multiples();
console.log(multiples(2, 5));

// 2-vazifa :

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

let arrResult2 = [];

function integers(a, b) {
  for (let i = a; i <= b; i++) {
    arrResult2.push(i);
  }
  return arrResult2;
}

integers();
console.log(integers(2, 10));

// 3-vazifa :

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

const oneCentury = 100;

function century(year) {
  let res = year / oneCentury;

  return Math.ceil(res);
}

century();

console.log(century(2001));

// 4-vazifa :

// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.


function maxMultiple(a, b) {
  if (b % a == 0 && a != 0) {
    return b;
  } else {
    return b - b % a;
  }
}

maxMultiple();

console.log(maxMultiple(10, 101));