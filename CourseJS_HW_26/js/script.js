"use strict";
//Task #1
const getFactorial = (n) => { 
  if (n === 0)
 {
    return 1;
 }
  return n * getFactorial(n - 1);
         
}
console.log(getFactorial(3));

//Task #2
const pow = (num, degree) => {
  if (degree === 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
}

console.log(pow(2, 3));

//Task #3
const sum = (a, b) => {
  if(a === 0) 
  return b;
  if(b === 0) 
  return a;
  let x = sum(a - 1, b);
  return ++x;
};

console.log(sum(5, 5));