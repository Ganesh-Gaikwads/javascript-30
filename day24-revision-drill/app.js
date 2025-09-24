 /*
 // Fundamentals Warm-Up Drill (10 Questions)

 //  1. Write a function checkSign(n) → prints "Positive", "Negative" or "Zero" based on n.

 function checkSign(n){
   if(n>0){
    return "Positive";
   } else if(n<0){
    return "Negetive";
   } else{
    return "Zero"
   }
 }
    
 console.log(checkSign(657));
 console.log(checkSign(-234));
 console.log(checkSign(0));


 // using arrow function

 let checksign = (n)=>{
  return n>0? "positive" : n<0 ? "Negetive" :"Zero";
 }

 console.log(checksign(0));
 console.log(checksign(-21));



 // 2. Write a function reverseWord(word) → reverses a single word (e.g. "hello" → "olleh").

 function reversesWord(str){
  let result = '';
  for(let i= str.length-1; i>=0; i--){
    result+=str[i];
  } return result;
 }
  console.log(reversesWord("hello"));
  console.log(reversesWord("GANESH GAIKWAD"));
  console.log(reversesWord("HASEENA PARKAR"));

  // USING BUILT IN METHOD 

  const reverseString = (str)=>{
   return str.split('').reverse().join('');
  }
  console.log(reverseString("Gautam Gaikwad" ));
  console.log(reverseString("Hello"));


  // 3. Given [10, 20, 30, 40, 50], print first element and last element.
  let arr =  [10, 20, 30, 40, 50];
  console.log("First Element of an array :",arr[0]);
  console.log("Last Element of an array :",arr[arr.length-1]);


  // 4 Write a function sumArray(arr) → returns the sum of numbers in the array.

  function sumArray(arr){
    let result = 0;
    for(let el of arr){
      result+=el;
    }
    return result;
     
  } 
  console.log(sumArray(arr));

  // in built method


  const sum = arr.reduce((sum, el)=> {
    return sum + el;
  })

  console.log(sum);

  //  5. Arrays – Filter => From [3, 8, 11, 14, 21], return only even numbers.
  
  let array = [3, 8, 11, 14, 21];
  let even = array.filter((n)=>{
    return n%2===0;
  })
  
  console.log(even);


  // 6. Array Map => Given [2, 4, 6], return a new array with each element doubled.
  let arr1 = [2,4,6];
  let doubled = arr1.map((n)=>n*2);
  console.log(doubled);
  
 // 7 . Objects – Basics => Create an object book with properties: title, author, year. Print all values.

 let Book ={
           title : "Think and Grow Rich",
           author: "Nepoleon Hill",
           year : 2012,

 } 

 console.log(Book.author); // using dot notation
 console.log(Book.title);
 console.log(Book.year);

 console.log(Book["author"]);  // using bracket notation
 console.log(Book["title"]);
 console.log(Book["year"]);



 // Objects – Update => Add a new property pages to book and update year to 2025.

Book.Pages= 230 ;
Book.year = 2025;
console.log(Book);

// Functions – Higher Order => Write a higher-order function applyOperation(fn, a, b) and test it with add and mul.

let add = (a, b)=> a+b;
let mul = (a, b) => a*b;

function applyOperation (func , a, b){
  return func(a, b);
}

console.log(applyOperation(add, 30,70));



//  Challenge => Write a function secondLargest(arr) that finds the second largest number in [10, 25, 8, 36, 42, 18]

let arrays= [10, 25, 8, 36, 42,18];

function secondLargest(arr){
 let max = -Infinity;
 let secondLargest = -Infinity;
 for(let el of arr){
  if(max<el){
    secondLargest = max;
    max = el;
  } else if( secondLargest<el && secondLargest<max){
    secondLargest = el;
  } 
 } 
 //return max;
 return secondLargest;

} 
console.log(secondLargest(arrays));

*/



// 1.Write a function isLeapYear(year) that returns true if the year is a leap year, otherwise false.
// (Hint: divisible by 4 but not 100, or divisible by 400)

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} : isLeapYear`;
  } else {
    return `${year} : is not LeapYear`;
  }
}
  console.log(isLeapYear(1996));


// 2.  Write a function countWords(str) that counts how many words are in "I love JavaScript so much".
// (Hint: split by " ")

function countWords(str) {
  let words = str.split(" ");
  let count = 0;
  for (let char in words) {
    count++;
  }
  return count;
}
console.log(countWords("i am ganesh gaikwad form pune "));


// 3.Strings => Write a function removeSpaces(str) that removes all spaces from a string.
// Example: "I love JS" → "IloveJS"

function removeSpaces(str){
  return str.replace(/ /g, '');
}

console.log(removeSpaces("i love js"));
console.log(removeSpaces("i am ganesh gaikwad form pune "));

// 4. Given [12, 5, 8, 130, 44], write a function filterGreaterThan10(arr) that returns only numbers > 10.

function filterGreaterThan10(arr){
  return arr.filter((n)=>n>10);
}

console.log(filterGreaterThan10([12, 5, 8, 130, 44]));

// 5.Write a function findAverage(arr) that finds the average of numbers in an array.Example: [10, 20, 30] → 20

function findAverage(arr){
   let sum = arr.reduce((sum, el)=>sum+el)
    return Math.floor(sum/arr.length-1);
 
}
console.log(findAverage([12, 5, 8, 130, 44]));