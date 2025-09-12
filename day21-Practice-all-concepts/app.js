// ==========================================================
//  🚀 JavaScript Fundamentals Assessment
//  Author: Ganesh
//  Description: Covering JS basics - Variables, Strings, Arrays, Functions
// ==========================================================


// ==========================================================
// SECTION 1: Basics
// ==========================================================

// 1. Difference between let, const, and var
// var → function-scoped, hoisted
// let → block-scoped, reassignable
// const → block-scoped, cannot be reassigned

// 2. Predict the output
let x = "5";
let y = 2;
console.log(x + y); // "52"
console.log(x * y); // 10

// 3. Conditional check
let num = 3;
if (num === 0) {
  console.log("Zero");
} else if (num > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// 4. Difference between == and ===
// == → compares only values
// === → compares value and type

// 5. Print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// ==========================================================
// SECTION 2: Strings
// ==========================================================

// 6. Reverse a string
function reverseString(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseString("i love to code"));

// 7. Count vowels
let string = "javascript";
let countVowel = 0;
for (let i = 0; i < string.length; i++) {
  let char = string[i];
  if ("aeiou".includes(char)) {
    countVowel++;
  }
}
console.log("Vowel count:", countVowel);

// 8. Palindrome check
let str = "madam";
let reversed = reverseString(str);
console.log(str === reversed ? "Palindrome" : "Not Palindrome");

// 9. Convert to uppercase without toUpperCase()
let name = "ganesh";
let upper = "";
for (let ch of name) {
  let code = ch.charCodeAt(0);
  if (code >= 97 && code <= 122) {
    upper += String.fromCharCode(code - 32);
  } else {
    upper += ch;
  }
}
console.log("Uppercase:", upper);

// 10. Concatenate without +
let s1 = "Hello";
let s2 = "World";
console.log(s1.concat(" ", s2));


// ==========================================================
// SECTION 3: Arrays
// ==========================================================

// 11. First and last element
let arr = [5, 10, 15, 20, 25];
console.log("First:", arr[0]);
console.log("Last:", arr[arr.length - 1]);

// 12. Manual push
let manualPush = [1, 2, 3];
manualPush[manualPush.length] = 99;
console.log(manualPush);

// 13. Manual pop
let manualPop = [10, 20, 30, 40];
manualPop.length = manualPop.length - 1;
console.log(manualPop);

// 14. Sum of array
let numbers = [4, 8, 12, 16];
let sumArr = 0;
for (let i = 0; i < numbers.length; i++) sumArr += numbers[i];
console.log("Sum:", sumArr);

// Using reduce
let sumReduce = numbers.reduce((acc, el) => acc + el, 0);
console.log("Sum (reduce):", sumReduce);

// 15. Count odd numbers
let oddArr = [2, 5, 7, 8, 10];
let oddCount = 0;
for (let n of oddArr) {
  if (n % 2 !== 0) oddCount++;
}
console.log("Odd count:", oddCount);

// 16. Largest number
let nums = [12, 45, 23, 67, 34];
let max = nums[0];
for (let n of nums) {
  if (n > max) max = n;
}
console.log("Largest:", max);

// 17. Reverse array manually
let arrRev = [1, 2, 3, 4, 5];
let reversedArr = [];
for (let i = arrRev.length - 1; i >= 0; i--) {
  reversedArr.push(arrRev[i]);
}
console.log("Reversed:", reversedArr);

// 18. Count frequency of 7
let freqArr = [7, 2, 7, 3, 7, 4];
let count7 = 0;
for (let n of freqArr) {
  if (n === 7) count7++;
}
console.log("7 appears:", count7, "times");

// Using filter
console.log("7 appears (filter):", freqArr.filter(n => n === 7).length);

// 19. Merge arrays
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let merged = [...a1, ...a2]; // spread operator
console.log("Merged:", merged);

// 20. Second largest number
let arr2 = [10, 50, 20, 40, 30];
let max1 = -Infinity;
let max2 = -Infinity;
for (let n of arr2) {
  if (n > max1) {
    max2 = max1;
    max1 = n;
  } else if (n > max2 && n < max1) {
    max2 = n;
  }
}
console.log("Largest:", max1, "Second Largest:", max2);


// ==========================================================
// SECTION 4: Functions
// ==========================================================

// 21. Sum of two numbers
function sumOf(a, b) {
  return a + b;
}
console.log(sumOf(2, 3));

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 6));

// 22. Factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// 23. Even/Odd check
function checkEvenOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));

// 24. Higher-order function
const addFn = (a, b) => a + b;
const subFn = (a, b) => a - b;
const mulFn = (a, b) => a * b;

function applyOperation(fn, a, b) {
  return fn(a, b);
}
console.log(applyOperation(addFn, 10, 5));
console.log(applyOperation(subFn, 10, 5));
console.log(applyOperation(mulFn, 10, 5));

// 25. Get even numbers
function getEvenNumbers(arr) {
  let result = [];
  for (let n of arr) {
    if (n % 2 === 0) result.push(n);
  }
  return result;
}
console.log(getEvenNumbers([12, 34, 11, 21, 54, 76, 87, 98]));


