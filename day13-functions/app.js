// warm up drill
// 1. sum of even sumbers;
/*

let sumEv = 0;
for (let i = 2; i <= 50; i = i + 2) {
  sumEv += i;
}
console.log(sumEv);

// 2. count how many vovel are in "Programming is fun";

let str = "programming is fun";
let VowelCount = 0;
for (let i = 0; i < str.length; i++) {
  let vowel = str[i].toLowerCase();
  if (
    vowel === "a" ||
    vowel === "e" ||
    vowel === "i" ||
    vowel === "o" ||
    vowel === "u"
  ) {
    VowelCount++;
  }
}
console.log(`The tatal vowels count in string is: ${VowelCount}`);

// Reverse a String "developer"

let string = "developer";
let revStr = "";

for (let i = string.length - 1; i >= 0; i--) {
  revStr += string[i];
}
console.log(revStr);

// Find a largest number in array ;

let array = [45, 12, 78, 34, 90, 21];
let max = array[0];

for (let i = 1; i < array.length; i++) {
if (max < array[i])max = array[i];
  }

console.log(max);

// palindrome check - if "madam" is a palindrome.

let palStr = "madam";
let reverseStr = "";

for (i = palStr.length - 1; i >= 0; i--) {
  reverseStr += palStr[i];
}
console.log(palStr === reverseStr ? "palindrome" : "not palindrome");


//---------------------------------Functions -------------------------------
// 1. hello world 
function hello(){
    console.log("hello");
} 

hello();


// 2. function to print 1 to  5;
function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
} 

print1to5(); // calling a function

//3. write function is Adult or not

function isAdult() {
  let age = 34;
  if (age > 18) {
    console.log("Is Adult");
  } else {
    console.log("Minor");
  }
} 

 isAdult(); // calling function

 // 4. write function for print poem;

 function poem(){
    console.log("twinkle twinkle , little star, ");
    console.log("how I wonder who you are !");
 } 
 
 poem();


 // 5. write a funtion to roll a dice and alwas display of the value dice (1 to 6);

 function diceRoll() {
   let randomNum = Math.floor(Math.random() * 6) + 1;
   console.log(randomNum);
 }
  diceRoll();
   

  //  write a function for count avarage of 3 number

  function avarge(a, b, c){
    console.log((a+b+c)/3);
  } avarge(10,3,5);
 
  function avg(a, b, c){
    let avg =( a+b+c)/3;
    console.log(avg);
  } 
  avg(12,12,6)

  //  create a function that prin multiplication number 

   function table(num){
    for(let i=1; i<=10; i++)
    {
       console.log(`${num} X ${i} = ${i * num}`);
    }
   } table(29);

   // function  for sum of two numbers
   function total(a,b){
    let total = a+b;
      console.log(total);
   }
    total(10,12)

    // write a function to sum of number form 1 to n;

    function getSum(n){
      let sum = 0;

      for(let i=1; i<=n; i++){
        sum+=i;
      }
      return sum;
    } 
    console.log(getSum(100));

    // create a function thatreturs the  concatination of all strings in an array
    let strings = ["Hi", "Hello", "Bye","!" ];
    function concat(string){
      let result =" " ;
      for(let i=0; i<string.length; i++){
        result +=string[i];
      }
      return result;
    } 
   console.log(concat(strings));

    */


   //----------------------------- functions practice problems ----------------------------------------

   //1. dd two numbers → Write a function that takes two numbers as arguments and returns their sum.

   function add(a,b){
    return a+b;
   } 
   console.log(add(12,8));
        
  //2. Check even/odd → A function that takes a number and returns "Even" or "Odd".

  function numCheck(num){
    if(num%2===0){
      return "even number";
    } else{
      return "odd number";
    }
  } console.log( numCheck(4));

  // 3. factorial with function
  
  


  function factorial(number){
    let result = 1;
    for(let i=number; i>=1; i--){
     result*=i;
  } return result;
  } console.log(factorial(5));


//Find the largest number
  
  function findMax(arr){
    let maxArr=arr[0];
    for(let i=1; i<arr.length;i++){
      if(maxArr < arr[i]) maxArr = arr[i];
    }
    return maxArr;
  } 
   findMax([12,32,53,65])
  

   //Count vowels

   
   function countVowels(str){
    let result = 0;
    for(let i=0; i<str.length; i++){
      let ch=str[i].toLowerCase();
      if( ch === "a" || 
          ch === "e" || 
          ch === "i" || 
          ch === "o" || 
          ch === "u" 
        ){ result++;
        
        }
      } return result;
   }  console.log(countVowels("Ganesh Gaikwad"));



// Check palindrome (string)

function isPalindrome(str){
  let reverseStr = '';
  for(let i=str.length-1; i>=0; i--) reverseStr+=str[i]; 
  

  return reverseStr === str ;
} console.log(isPalindrome("level"));
  console.log(isPalindrome("life"));

// Sum of array elements

function sumArray(arr){
  let sum = 0;
  for(let i=0; i<=arr.length-1; i++)
     sum+=arr[i];
     return sum;
} console.log(sumArray([2,1,2]));


//Reverse a string 
function reverseString(str){
  let result = "";
  for(let i=str.length-1; i>=0; i--)
     result+=str[i];
     return result;
 
} console.log(reverseString("Maharashtra"));







/*

function sumArray(arr){
let sumArr = 0;
for(let i=0; i<=arr.length-1; i++){
  sumArr+=arr[i];
//  console.log(arr[i]);
}
 return sumArr;
}  console.log(sumArray([1,2,3,5,54]));



// let arr = ;
// let sumArr = 0;
// for(let i=0; i<=arr.length-1; i++){
//   sumArr+=arr[i];
// //  console.log(arr[i]);
// }
// console.log(sumArr);








   let str = "Ganeshee";
   let countStr = 0;

   for (i = 0; i < str.length; i++) {
     let ch = str[i].toLowerCase();
     if (ch === "a" ||
         ch === "e" ||
         ch === "i" ||
         ch === "o" ||
          ch === "u") {

       countStr++;
     }
    } console.log(countStr);

    
  let arr = [2,4,6,8,10,12,14];
  let maxArr =arr[0];
  for(let i=1; i<arr.length; i++){
    if(maxArr<arr[i]){
      maxArr=arr[i]
    }
     
  } console.log(maxArr);
   */