/*
 Day 14 - JavaScript Learning
 Topics: Functions, functions with argument, return keywords

 Author: Ganesh Gaikwad
 Date: 2025-09-05
*/

// 1. Print numbers from 1 to 30.
for(let i=1; i<=30; i++){
    console.log(i);
}

// 2. Print all multiples of 5 between 1 and 100.
for(let i=1; i<=100; i++){
    if(i%5===0){
        console.log(i);
    }
}

// different approch 
for(let i=5; i<=100; i+=5){
    console.log(i);                    // this avoid if check and skipp i=0
}


// 3.  Find the sum of all odd numbers between 1 and 50.
 let sumofOdd = 0;
 for(let i=1; i<=50; i++){
    if(i%2!==0) sumofOdd+=i;
 } console.log( `Sum of odd Number form 1 to 50: ${sumofOdd}`);

 // 4. Count how many times the letter "a" appears in the string "JavaScript is amazing".
 let str = "JavaScript is amazing";
 let Count = 0;

 for (let i = 0; i < str.length; i++) {
   if (str[i] === "a" || str[i]==="A") Count++;
 }
 console.log(Count);

// Find the largest number in the array [5, 12, 45, 7, 89, 23].
let array = [5, 12, 45, 7, 89, 23];
let largeArr = array[0];

for(let i=1; i<array.length; i++){
    if(largeArr < array[i]) largeArr=array[i];
} 
console.log(`The largest number in array : ${largeArr}`);


// reverse the number ;
 
let ex = 12345;
let reverse = 0;

while( ex > 0 ){
    let digit = ex % 10;
    reverse = reverse * 10 + digit;
    ex = Math.floor(ex/10);
} 
console.log(reverse);

// palindrome check

let string = "Level";
 
let reverseString = "";
 string = string.toUpperCase();
for(let i=string.length-1; i>=0; i--) reverseString+=string[i];
console.log(reverseString == string ? "Palindrome " : "Not palidrome");


// Find the smallest number in an array

let arrayMin = [34, 12, 67, 2, 89];
let min = arrayMin[0];
for(let i=1; i<arrayMin.length; i++){
    if(min > arrayMin[i]) min=arrayMin[i];
} console.log(`smallest number in the array : ${min}`);

// Count consonants in a string
let strCount = "JavaScript";
let count = 0;

for (let i = 0; i < strCount.length; i++) {
  if (
    strCount[i] !== "a" &&
    strCount[i] !== "e" &&
    strCount[i] !== "i" &&
    strCount[i] !== "o" &&
    strCount[i] !== "u"
  )
    count++;
}
console.log(` string total characters are, ${strCount.length} and consonant available in string : ${count}`);

//  Sum of even numbers in an array
let arr =[2, 5, 8, 13, 10];
let sumofArr = 0;

for(let i=0; i<arr.length; i++)  
    if(arr[i]%2===0)sumofArr+=arr[i];
console.log("sum of arr:" , sumofArr); 