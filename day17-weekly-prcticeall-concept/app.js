// Sunday-07/09/2025 => weekly practice

// block-1 : Warm-up ( conditionals problems)

// 1. Check if a number is positive, negative, or zero.

let num = 0;
if (num < 0) {
  console.log(`${num}:Negetive Number`);
} else if (num > 0) {
  console.log(`${num}: Positive Number`);
} else {
  console.log("Zero");
}

// 2. Take an age and print if the person is a Child, Teenager, Adult, or Senior.

let age = 30;
if (age <= 12) {
  console.log("child");
} else if (age <= 18) {
  console.log("Teenager");
} else if (age >= 18 && age < 30) {
  console.log("Adult");
} else if (age >= 30) {
  console.log("Senior");
} else {
  console.log(" please enter correct age.");
}


// 3.  Take a year and check if it’s a leap year.
let year = 2023;
if ((year % 4 == 0 && year % 400 === 0) || year % 100 !== 0) {
  console.log(`${year}: Leap Year.`);
} else {
  console.log(`${year}:Not Leap Year.`);
}

// Block-2: Loops

// 4.Print numbers from 1 to 50.
for (let i = 1; i <= 50; i++) {
  console.log(i);
}



// 5. Print sum of first 100 numbers.
let sum = 0;
for (let i = 1; i <= 100; i++) sum += i;
console.log("sum of natural numbers form  1 to 100 :", sum);


// 3. Print all multiple of 7 between 1 and 100.
for (let i = 7; i <= 100; i += 7) console.log(i);


// print the multiplecation table of 7
for (let i = 1; i <= 10; i++) {
  console.log(`7 X ${i} = ${i * 7}`);
}


// 7. print all even number 1-100
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}


// Block-3 : strings


// 8.Take a string and print it in reverse.
let str = " Consistency beats Intensity";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) rev += str[i];
console.log(`reverse string : ${rev}`);


// 9.Count how many vowels are in a string.(used above str stirng)
let count = 0;
for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase();
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u")
    count++;
}
console.log(`In the "${str}" Vovel count is: ${count} `);


// 10. Check if a string is a palindrome.
let string = "Level";
string = string.toLowerCase(); // just for edge case
let revstr = "";
for (let i = string.length - 1; i >= 0; i--) revstr += string[i];
console.log(string === revstr ? "Palindrome" : "Not Palindrome");


// 11.Convert a string to uppercase without using .toUpperCase() (hint: char codes).

// i dont familar with this concept i wiil solve it after learning this concept

// Block-4 Arrays

//12. Given [10, 20, 30, 40, 50], print the sum of all elements.
let arr = [10, 20, 30, 40, 50];
let sumArr = 0;
for (let i = 0; i < arr.length; i++) sumArr += arr[i];
console.log(sumArr);

// 13. find the largest number in an array.
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) max = arr[i];
}
console.log(`Largest element in the arr :${max}`);

// 14. everse an array without using .reverse().
let reverArr = [];
for (let i = arr.length - 1; i >= 0; i--) reverArr.push(arr[i]);
console.log(reverArr);

// 15. Count how many times a number appears in an array.

let Count = arr[0];
for (let i = 0; i <= arr.length; i++) {
  Count++;
}
console.log(Count);


// Monday 08/09/2025

// 1. conditionals-Fizz buzz problem

let number = 45;
if (number % 3 === 0 && number % 5 === 0) {
  console.log("Fizzbuzz");
} else {
  if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(`${number}: is not divisible by 3 & 5.`);
  }
}

// multiplication table of 9
for (let i = 1; i <= 10; i++) {
  console.log(`${i} x 9 = ${i * 9}`);
}

// Stirng - count Vowels
let strings = "javascript";
let vowCount = 0;

for (let i = 0; i < strings.length; i++) {
  let alphabet = strings[i].toLowerCase();
  if (
    alphabet === "a" ||
    alphabet === "e" ||
    alphabet === "i" ||
    alphabet === "o" ||
    alphabet === "u"
  )
    vowCount++;
}
console.log(vowCount);


// array - iven an array [4, 8, 15, 16, 23, 42], find the largest number manually (without using Math.max).
let array = [4, 8, 15, 16, 23, 42];
let maxArr = array[0];
for (let i = 1; i < array.length; i++) {
  if (maxArr < array[i]) maxArr = array[i];
}
console.log(maxArr);


//Take an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// Print only the even numbers.
//Print their sum at the end.

let mixArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = [];
let evenSum = 0;

for (let i = 0; i < mixArr.length; i++) {
  if (mixArr[i] % 2 === 0) {
    evenNum.push(mixArr[i]);
    evenSum += mixArr[i];
  }
}
console.log(evenNum);
console.log(evenSum);


// Filter even number using loop
let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] % 2 == 0) {
    even.push(newArr[i]);
  }
}
console.log(even);


//==================== function set drill=================

// level 1 Basics
// 1. simple greeting
function greet(name) {
  console.log(`hello ${name}!`);
}
greet("ganesh");


// 2. even/odd check
function checkEvenOdd(n) {
  if (n % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
checkEvenOdd(7);


// Sum of Two Numbers
function addNumbers(a, b) {
  return a + b;
}
addNumbers(1, 3);


// level 2  Functions + loops
// 4. factorial return
function factorial(num) {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}
factorial(4);


// 5. reverse string
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result; // reminder : always log out of for loop
}
reverseString("hello");


// 6.largest in Array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      // reminder compare correct min/max
      max = arr[i]; // while comparing 2 arr  use = not += this for adding elements
    }
  }
  return max;
}
findMax([10, 13, 2, 43]);


// Level-3 Higher order Functions(Intro)


// Write a function applyOperation(fn, num) that takes a function and a number, then applies the function to the number.

let add = function (num1, num2) {
  return num1 + num2;
};

let sub = function (num1, num2) {
  return num1 - num2;
};

let mul = function (num1, num2) {
  return num1 * num2;
};


// higher order function

function applyOperation(func, num1, num2) {
  return func(num1, num2);
}
console.log(applyOperation(mul, 20, 3));
console.log(applyOperation(add, 20, 67));
console.log(applyOperation(sub, 200, 67));

// Filter Even Numbers
function getEvenNumbers(arr) {
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }

  //return `Filtered even numbers: ${even}`
  //console.log(`Filtered even numbers: ${even}`);  using this to js convert into in normal number not print in array.
  console.log(even);
}
getEvenNumbers([1, 2, , 3, 6, 45, 3, 6, 75, 3, 56]);
getEvenNumbers([98, 76, 78, 77, 56, 45, 33, 53, 79]);


// level-4 Combined challege
// 9. Palindrome Check (Function)
function isPalindrome(str) {
  let rev = "";
  let lowstr = str.toLowerCase();
  for (let i = str.length - 1; i >= 0; i--) {
    rev += lowstr[i];
  }
  return rev === lowstr;
}
isPalindrome("hello");


// Second Largest Number

function secondLargest(arr) {
  let max = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondLargest = max;
      max = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < max) {
      secondLargest = arr[i];
    }
  }
  console.log(`Largest element in array :${max}`);
  console.log(`Secondlargest element in array :${secondLargest}`);
}
secondLargest([1, 2, 3, 4, 5, 6]);
