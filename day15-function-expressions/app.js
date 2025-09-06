// Print all numbers divisible by 7 between 1 and 100.

for(let i=7; i<=100; i+=7) console.log(i);

//Reverse the string "JavaScript".
let str = "JavaScript";
let Reverse = "";
for (let i = str.length - 1; i >= 0; i--) Reverse += str[i];

console.log(Reverse);

// Count how many consonants are in "Developer".
let string = "Developer";
let count =0;
for(let i=0; i<string.length; i++){
    let cons = string[i].toLowerCase();
     if(
        cons !=="a" &&
        cons !=="e" &&
        cons !=="i" &&
        cons !=="o" &&
        cons !=="u" 
     ) count++;
} console.log(count);

// Find the largest number in [23, 89, 45, 12, 67]
let arr =[23, 89, 45, 12, 67];
let largest = arr[0];
for(let i=1; i<arr.length; i++){
    if(largest<arr[i]) largest = arr[i];
} console.log(largest);

//Check if the number 12321 is a palindrome.

let num = 12321;
OldNum= num;
let ReverseNum = 0;
    while(num > 0){
    let digit = num%10;
    ReverseNum = ReverseNum *10+digit;
    num=Math.floor(num/10)
     }  console.log(OldNum ===ReverseNum? "palindrome":"Not palindrome");

  // Sum of digits of a number
  let number = 1234;
    let sum = 0;

    while(number>0){
        let digit = number%10;
         sum+=digit;
        number=Math.floor(number/10);
    } console.log(sum);
  
//Write a function isPrime(num) → returns true if number is prime, else false.
 
function isPrime (num){
    if(num < 2 ) return false; //  0 and 1 not prime numbers

    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0){
            return false;  // divisible -> not prime
        }
    }  return true;
} 
console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(17));

//Count frequency of each character in "banana".
 let strings = "banana";
 let char = strings.split(' ').reverse(' ');
 console.log(char);
 let Count = {};
 
for(let i=0; i<char.length; i++){
     count+=char[i]
     
} console.log(count);
  