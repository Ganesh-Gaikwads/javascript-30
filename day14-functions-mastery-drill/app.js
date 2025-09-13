/*
 Day 14 - JavaScript Learning
 Topics: Functions, functions with argument, return keywords

 Author: Ganesh Gaikwad
 Date: 2025-09-05
*/

/*

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

*/



// Function Practice Set - Saturday - 13|09|2025
//Level-1 Basics 

// 1. Write a function sayHello() that prints "Hello, World!"

function sayHello(){
    console.log("Hello World");
}

sayHello( );


// 2. Write a function square(num) that returns the square of a number.

 function squareNum(num){
      return  num*num;
 }
 console.log(squareNum(2));

 // 3. Write a function isEven(num) that returns true if the number is even, otherwise false.

 function isEven(n){
     return n%2===0;
 }

 console.log(isEven(2));


 // 4. Write a function maxOfTwo(a, b) that returns the larger number.

 function maxOf(a, b){
 
   // return a>b ? a:b;

    if(a>b){
        return `${a}: Largest number `;
    } else{
        return `${b}: Largest number `;
    }
 }

 maxOf(2,4);

 // 5. Write a function sumArray(arr) that returns the sum of all elements in an array.
 // first apporch 
  function sumArray(arr){
    let sum =0;
    for(let el of arr){
        sum+=el;
    }
    return sum;
  }

  sumArray([1,2,3])

  

  // Level-2 Loop + Functions 

  // 6.  Write a function factorial(n) that returns the factorial of n (loop method).
   
   function factorial(n) {
     let result = 1;
     for (let i = n; i >= 1; i--) {
       result *= i;
     }
     return result;
   }

   factorial(5);
 

   // 7. Write a function reverseString(str) that returns the reversed string.

   function reverseString(str){
    let result = '';
    for(let i=str.length-1; i>=0; i--){
        result += str[i];
     }
     return result;
   }

   reverseString("Ganesh");


   // 8. Write a function findMax(arr) that returns the largest number in an array.

   function findMax(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i]
        }
    } return max;
   }

    findMax([3,4,6,2,9]);


    // 9 Write a function countVowels(str) that counts vowels in a string.

    function countVowels(str){
        let result = 0;
        for(let i=0; i<str.length; i++){
            let ch=str[i]
            if(
                str[i]==="a" ||
                str[i]==="e" ||
                str[i]==="i" ||
                str[i]==="o" ||
                str[i]==="u"
            )
            result++;
        } return result;
    }

    countVowels("Ganessh");

    // 10. Write a function isPalindrome(str) that returns true if a string is a palindrome.

    function isPalindrome(str){
        let reverse = '';
        for(let i=str.length-1; i>=0; i--){
                 reverse+=str[i];
        } 
        return reverse===str;
     }

   console.log( isPalindrome("hello"));


    // Level 3 – Higher-Order Functions

    // 11. Write a higher-order function applyOperation(fn, a, b) and test with add, sub, mul.
     
    let add = (a,b)=> a+b;
    let sub = (a,b)=>a-b;
    let mul = (a,b)=>a*b;
    
    function applyOperation(func ,a , b){
        return func(a,b)
    };

  console.log(applyOperation(add, 2,3));
  console.log(applyOperation(sub, 10 ,2));
  console.log(applyOperation(mul, 3,3));

  // 12. Write a function getEvenNumbers(arr) that returns a new array with only even numbers.
  //  First with a loop, then with .filter().
  
  // using loop;
  function getEvenNumber(arr){
    let even = [];
    for(let el of arr){
        if(el%2===0){
            even.push(el)
        }
    }
    return even;
  }
 
  console.log(getEvenNumber([1,2,3,4,5,6,7,8,9]));



  // using filter;


  function getEvenNumbers(arr){
   let even=  arr.filter((el)=>el%2===0)
   return even;
  } 
  console.log(getEvenNumbers([1,2,3,4,5,6]));

  // 13. Write a function doubleArray(arr) that doubles each number (use .map()).

  function doubleArray(arr){
    let double = arr.map((el)=>el*2)
    return double;
  }

  console.log(doubleArray([2,4,5,6,7,8]));


  // 14. Write a function sumArrayReduce(arr) that sums numbers using .reduce().

  function sumArrayReduce(arr){
    let sum =arr.reduce((sum, el)=> sum+el);
    return sum;
  }
  console.log(  sumArrayReduce([1,2,3,4,5,6,7,8,9,10]));

  // 15. Write a function findFirstGreaterThan(arr, x) that returns the first number greater than x (use .find()).

  function findFirstGreaterThan(arr, x){
    let Firstmax = arr.find((el)=>el>x);
    return Firstmax;
  }

  console.log(findFirstGreaterThan([4,5,6,3],1));

  //Level 4 – Combined Challenge

  // 16. Write a function secondLargest(arr) that returns the second largest number in an array.
  
  function secondLargest (arr){
  let max = -Infinity;
  let secondmax  =-Infinity;
  for(let i=0; i<arr.length; i++){
    if(max<arr[i]){
        secondmax=max;
        max=arr[i]
    } else if(secondmax<arr[i] && secondmax<max ){
        secondmax=arr[i]
    }
  }
  return `SecondLargest: ${secondmax}` ;

  } 

  console.log(secondLargest([1,2,3,4,5,6,7,8]));
 

  // 17. Write a function wordFrequency(str) that counts how many times each word appears.
  function wordFrequency(str){
    let result =" ";
    for(let i=0; i<str.length; i++){
        //console.log(str[i], i);
       

    }
    return result;
  }
  console.log(wordFrequency("Ganesh"));


  // 18. Write a function calculator(a, b, operation) where operation is "add", "sub", "mul", or "div".
  
  let addition  = (a,b)=>a+b;
  let subtraction = (a,b)=>a-b;
  let multiples =(a,b)=>a*b;
  let division = (a,b)=>a/b;

  function calculator (a,b,func){
    return func(a , b)
  };

  console.log(calculator(2,3,multiples));
  console.log(calculator(24,93,addition));
  console.log(calculator(92,13,subtraction));
  console.log(calculator(27,3,division));


  // 19. Write a function uniqueElements(arr) that returns only unique values from an array.

  function uniqueElements(arr){
  let result = [];
    for(let el of arr){
        if(!result.includes(el)){
            result.push(el)
        }
    }
    return result
    
   }
   console.log(uniqueElements([1,2,2,3,3,4,5,6,7,7,7,8]));

 


  // 20. Write a function studentsPassed(students) where students is an array of objects {name, score}, return only those with score ≥ 40.
 
  function studentsPassed(students){
  
    return students.filter((students)=>students.score>=40)

  }
 
 console.log( studentsPassed(students = [
  { name: "Ganesh", score: 35 },
  { name: "Rahul", score: 55 },
  { name: "Sita", score: 75 }]));