
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
// peint multiplication table of given number

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