/*
//string drill 


// 1. length propery
let str1 = "Ganpati Bappa Moraya";
console.log(str1.length);


// indexing 
let first = str[0];
let last = str[str.length-1];
console.log(`first char of strting ${first}.`);
console.log(`last char of string ${last}`);


// loop+condition - counting vowels
let count1 = 0;
for(let i=0; i<str.length; i++){
    let ch = str[i].toLowerCase();
    if(ch ==="a" || ch ==="e" || ch ==="i" || ch==="o" || ch==="u" ){
        count1++;
    }
} console.log(count1);


//condition + string methods - palindrome check
let string = "kavak";
let palindromeStr =string.split('').reverse().join('');


// console.log(string); for debugging purpose
if(string === palindromeStr){
    console.log(`${palindromeStr}, Palindrome string.`);
} else{
    console.log(`${string}. not palindrome string.`);
}

 
// string Method -convert a string to uppercase and lowercase
console.log(str.toUpperCase());
console.log(str.toLowerCase());

 
//string split + array join 
let msg = "   Hello  ";
let reverseMsg = msg.split('').reverse().join('');
console.log(reverseMsg);


// trim + replace  

let trimMsg =msg.trim();
console.log(trimMsg);


// condition + isNaN 

let newStr = "1we235";
 let onlyDigits = true;

for(let i=0; i<newStr.length; i++){
    if(isNaN(newStr[i])){
       onlyDigits = false;
       break;
        }
} console.log(onlyDigits);


// count frequecy of each charcter in a string

let strinG = "hello";
let freq = {};

for(let i=0; i<strinG.length; i++){
    let char = strinG[i];
    if (freq[char]) {
  freq[char]++;   // already seen → increase
} else {
  freq[char] = 1; // first time → set to 1
}

}  console.log(freq);



//------------------------------------------ A. Numbers and Math ----------------------------------
// 1.convert kilometer to miles

let km = 12;
let  oneMile = 0.621371;
mile= Math.round( km *oneMile);
console.log(`${km} kilometer is  = ${mile} miles.`);


//convert Celcius to Fahrenheit 
let temp = 23;
let Fahrenheit =  Math.floor(temp * 9/5 +32);
console.log(Fahrenheit);


// find the maximum of three number


let a = 162;
let b = 48904;
let c= 273;

if(a > b && a>c){
    console.log("a is big",a);
} else if(b> c &&  b>a ){
    console.log("b is big",b);
} else{
    console.log("c is big",c);
}


// check if a number is evem or odd

let number = 423;
console.log((number%2==0) ? "even" : "odd");


// print all numbers divisible by 7 between 1 to 100

for(let i=1; i<=100; i++){
    if(i%7===0){
        console.log(i);
    }
}


// Print the sum of digit of a number 
let num1 = 1235;
 let sum = 0;
 while(num1 > 0){
    sum+= num1%10;
    num1=Math.floor(num1/10); // remove last digits

 }
 console.log(sum);
 

// B. Loops and Patterns

// print multiplication table of given number

console.log("table of numbers");
let  digit = 7;
for(let i=digit; i<=digit*10; i=i+digit){
    console.log(i);
}


// Print factorial of a given number.
let factorial = digit*(digit-1);
console.log(factorial);



//-------------------------Mini Drill-----------------------

// 1. reverse a string.
let sms = "Hello";
let revreseSms =sms.split('').reverse().join('');
console.log(revreseSms);


//Find maximum in an array
let arr = [2,8,5,1,9,46];
let max = arr[0]; 
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
} console.log(max);

//Count vowels in a string

let str = "javascript";
let count2 = 0;
for(let i=0; i<str.length; i++){
    let ch = str[i].toLowerCase();
    if(ch==="a" || ch==="e" || ch==="i" || ch==="o" || ch==="u"){
        count2++;
    }  
} console.log(count2);


// fizzBuzz 

let num = 12;

for(let i=0; i<=50 ; i++){

     if(i%3===0 && i%5===0){
        console.log(i,"FizzBuzz");
    }  else if(i%3===0){
        console.log("Fizz");
    } else if(i%5===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

// reverse a string

console.log("using methods approch");

let greeting = " Namskar everyone";
let reverseGreet = greeting.split('').reverse().join('');
console.log(reverseGreet);


console.log("Using loop approch");
let reversed = "";
for(let i = greeting.length-1; i>=0; i--){
  let char = greeting[i];
  reversed+=char
} console.log(reversed);


//Sum numbers 1–100

let count = 0;
for(let i=1; i<=100; i++){
    count=count+i
} console.log(count);

*/

//----------------------------- Day-Wednesday 03-09-2025 -------------------------------------

// Print numbers 1 to 20.
 
for(let i=1; i<=20; i++){
     console.log(i);
} 

// Print all even numbers between 1 and 50.

for(let i=2; i<=50; i=i+2){
    console.log(i);
}

//Print all odd numbers between 1 and 50.
for(let i=1; i<=50; i=i+2){
    console.log(i);
}

// Print the sum of numbers from 1 to 50.

let sum = 0;
for(let i=1; i<=50; i++){
    sum+=i;
}console.log(sum);

// Print the multiplication table of 7.
for(let i=7; i<=70; i=i+7 ){
    console.log(i);
}


for(let i=1; i<=10; i++){
    console.log(`7 x ${i} : ${7*i}`);
}
// Given an array [3, 7, 1, 9, 5], print each element using a loop.
let arr = [3,74,1,9,15];
 
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// for of loop

for( element of arr){
    console.log(element);
}

// Find the largest number in [3, 7, 1, 9, 5] using a loop
let largestNum = arr[0];
 for(let i=0; i<arr.length; i++){
    if(largestNum < arr[i]){
        largestNum=arr[i];
    }
   
 }  console.log( "the largest value in the array :",largestNum);
 
 // Count how many vowels are in the string "javascript loops" using a loop.

 let string = "javascript loops";
 let availableVowels = 0;
 for(let i=0; i<string.length; i++){
    let vowels = string[i].toLowerCase();
     if(vowels ==="a" || vowels ==="e" || vowels ==="i" || vowels ==="o" || vowels ==="u" ){
        availableVowels++;
     }
 } console.log(availableVowels);


 // Reverse the string "mentor" using a loop (don’t use .reverse() or .split('').reverse()).
let str = "mentor"
 let reversedStr = '';
 for(let i=str.length-1; i>=0; i--){
    reversedStr +=str[i];
 } console.log(reversedStr);


 // Print all numbers between 1 and 100 divisible by both 3 and 5.
 for(let i=1; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log(i);
    }
 }

 // Find the smallest number in an array -👉 Example: [12, 5, 7, 22, 3] → 3.
 
 let array = [12,5,7,22,3,1];
 let smallNum = arr[0];
 

 for(let i=0; i<=array.length; i++){
    if(smallNum>array[i]){
        smallNum=array[i];
    }
 } console.log(smallNum);

 // Count consonants in a string 
  let stringName = "JavaScripts";
  let consonants =0;

  for(let i=0; i<stringName.length; i++){
    let ch = stringName[i].toLowerCase();
    if(ch !== "a" || ch !== "e" || ch !== "i" || ch !== "o" || ch !== "u" ){
        consonants++;
    }
  } console.log(consonants);

  //Reverse the number (not string) 👉 Example: 12345 → 54321.
  let numbers = 123456;
  let reversed = 0;

  while(numbers > 0){
    let digit = numbers%10;
    reversed = reversed * 10 + digit;
    numbers = Math.floor(numbers/10)
  } 
  console.log(reversed);

  

   

  // reverse number 

  let num = 123456789;
  let reverse = 0;

  while(num > 0){
    let digit = num%10;
    reverse = reverse *10 +digit;
    num = Math.floor(num/10)
  } console.log(reverse);



// Palindrome check level  of number

let number = 121;
let original = number;
let reverseNum = 0;

while( number >0){
    let digit = number % 10;
    reverseNum = reverseNum * 10 + digit;
    number = Math.floor(number/10);

} console.log(original == reverseNum ? "Palindrome number" : "NOt Palidrome Number");

  

// palindrome check of  string name "Level"

let stringNew = "DID";
let reverseString = "";

for(let i=stringNew.length; i>=0; i--){
    reverseString +=stringNew[i]
} console.log(stringNew === reverseString? "palindrome":"not palindrome");

// finding largest number in array  for example array = [12,34,5,12,86];

let arrays = [12,34,5,1,23,56];
let BigNum = arrays[0];
let minNum = arrays[0]

for(let i=1; i<=arrays.length; i++){
    if(BigNum < arrays[i]){
        BigNum=arrays[i]
    } else if( minNum > arrays[i]){
        minNum=arrays[i];
    }

} console.log(`Largest Number in array : ${BigNum}`);
console.log(`Smallest Number in array :${minNum}`);

// find smallest number + largest number and as well as sum of all numbers

let newArr = [2,4,6,8];
let min = newArr[0];
let max = newArr[0];
let sumOfnumbers = 0;
let average = 0;


for(let i=0; i<newArr.length; i++){
    if(newArr[i]>max) max = newArr[i];
    if(newArr[i]<min) min= newArr[i];
    sumOfnumbers+=newArr[i]
   average =sumOfnumbers/newArr.length;
} console.log(`Largest Number :${max}`);
  console.log(`Smallest Number :${min}`);
  console.log(`Sum of Numbers :${sumOfnumbers}`);
  console.log(`The avarage of numbers is :${average}`);
    
    








 