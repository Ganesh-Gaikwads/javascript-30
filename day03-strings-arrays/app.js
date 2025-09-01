/* =========================== STRING METHODS ===========================

   METHODS → Actions that can be performed on an object.
   FORMAT  → stringName.method();

   Note: Strings are immutable in JavaScript.
         Any change creates a new string, old one remains the same.
*/

// trim() → Removes whitespaces from both ends
let passwordInput = prompt("Enter password:");
let trimmedPass = passwordInput.trim();
console.log(trimmedPass);

// toUpperCase() & toLowerCase()
let message1 = prompt("Enter a message:");
console.log(message1.toUpperCase());

let sms = prompt("Enter an SMS:");
console.log(sms.toLowerCase());

// indexOf() → Finds the first occurrence index
let msg1 = "ILoveCoding";
console.log(msg1.indexOf("n"));

// Method chaining example
let rawMsg = prompt("Enter a message:");
console.log(rawMsg.trim().toUpperCase());

// slice() → Extracts part of a string
let str1 = "I love Coding";
console.log(str1.slice(1, 7)); // " love "
console.log(str1.slice(-6));   // Last 6 characters

// replace() → Replace a part of the string
let msg2 = "Hi there, are you using WhatsApp?";
console.log(msg2.replace("WhatsApp", "Instagram"));

// repeat() → Repeat the string
let repeatStr = "Ganesh Gaikwad ";
console.log(repeatStr.repeat(3));

// Practice question
let helpMsg = " help! ";
console.log(helpMsg.trim().toUpperCase());

// Predict output
let nameStr = "ApnaCollege";
console.log(nameStr.slice(4, 9)); // "Colle"
console.log(nameStr.indexOf("na")); // 2
console.log(nameStr.replace("Apna", "Our")); // "OurCollege"


/* =========================== ARRAYS ===========================

   Linear collection of items.
   Arrays are mutable (values can be changed).
*/

// Mixed array
let students = ["Aman", "Shraddha", "Anurag"];
let nums = [1, 2, 3, 4, 5];
let info = ["Shraddha", 25, 89.6];
let emptyArr = [];

console.log(students);
console.log(nums);
console.log(info);
console.log(emptyArr);

// Mutability example
let fruits = ["mango", "apple", "litchi"];
fruits[0] = "banana";
fruits[3] = "guava";
console.log(fruits);


/* =========================== ARRAY METHODS =========================== */

// push() & pop()
let cars = ["Maruti", "Honda", "Bajaj"];
cars.push("Tata");
console.log(cars);
cars.pop();
console.log(cars);

// unshift() & shift()
let followers = ["a", "b", "c", "d"];
followers.unshift("z");
console.log(followers);
followers.shift();
console.log(followers);

// concat() → Merge arrays
let primaryColors = ["red", "yellow", "blue"];
let secondaryColors = ["orange", "green", "violet"];
console.log(primaryColors.concat(secondaryColors));

// reverse() → Reverse array
console.log(primaryColors.reverse());

// slice() → Extract portion of an array
let studentList = ["Ajay", "Laxman", "Rajan", "Gautam", "Akshay"];
console.log(studentList.slice(1, 4));
console.log(studentList.slice(-2));

// sort() → Sort array
let days = ["Monday", "Wednesday", "Friday", "Saturday"];
console.log(days.sort());

let chars = ['v', 'h', 'r', 'i', 'q', 'o', 'd', 'v'];
console.log(chars.sort());

let numbers = [5, 4, 3, 2, 1];
console.log(numbers.sort((a, b) => a - b)); // Ascending


/* =========================== CONSTANT ARRAY =========================== */
// You can change values but cannot reassign the array itself
const numArr = [1, 2, 3, 4, 5];
numArr.push(6);
console.log(numArr);
numArr.pop();
console.log(numArr);
