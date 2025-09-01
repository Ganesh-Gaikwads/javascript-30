//======================= Day 1- JS Basic & Core Methods Drill
//Master variables , data types , operators, conditionals, strings, and arrays through problem solving.



//  Declare 3 variables name, age, isStudent and log with console.
   let name = "Piyush";
   let age = 16;
   let isStudent = true;

   console.log(`${name} is ${age} year old. He is student . ${isStudent}`);

//  swap values of two variable without using a third variable.

let x = 12;
let y =8;
x = x+y;
y = x-y;
x= x-y;

console.log(`x:${x}, y:${y}`);

//  odd /even check

let num = 3;
if(num%2===0){
    console.log(`${num}: Even Number`);
}else{
    console.log(`${num}: Odd Number`);
}

//  concatenate two strings
let stringsOne = "JavaScript";
let stringTwo = "Rocks";
let concatenateString = stringsOne +" "+ stringTwo;
console.log(concatenateString);

// convert string into Uppercase
let string = "Hello World"
console.log(string.toUpperCase());



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   Focused topic drill >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// A. variable and operators

//  add ,subtract , multiply , and divide  tow numbers entered by user.

let numOne = 12;
let numTwo = 28;

console.log(`The addition of two numbers is:${numOne + numTwo}`);
console.log(`The subtraction of two numbers is:${numTwo - numOne}`);
console.log(`The multiplication of two numbers is:${numOne * numTwo}`);
console.log(`The division of two numbers is:${numOne/numTwo}`);

  
// calculate the remainder of numOne and numTwo
console.log(`The remainder of numOne and numTow : ${numOne%numTwo}`);

// Increment a number by 5 using += operator

let  number  = 15;
let newNumber= number+=5;
console.log(newNumber);

// check if numbers are equal using  ===

console.log(`${numOne===numTwo}`);

// check if a is greater than b and c is less than d

let a = 12;
let b = 6;
let c = 23;
let d = 45;

 console.log(a>b && c<d);

 
 if(a>b && c<d){
    console.log(true);        // another way 
 }else{console.log(false);}
 


 // B- Conditional statements

 // 1. check if a number is positive negative or zero;
 
 let inputNum = 0; 
 if( inputNum>0){console.log("Positive Number");
 } else if(inputNum<0){console.log("Negative Number");
 }else{console.log("Zero");}

 // 2. If age >18 print "Adult" , else "Minor"

 let ageNum = 44;

 if (ageNum >= 18) {
   console.log("Adult");
 } else {
   console.log("Minor");
 }

 //3. check if given year is a leap year

 let year = 2024;
 if((year%4===0 && year%100!==0) || year%400==0){
    console.log(`${year}:Leap Year.`);
 } else{
    console.log(`${year}:Not Leap Year.`);
 } 

 // 4.Determine the grade form a given percentage: 90+ = A, 75-89= B, 50-74 = C , else fail.
 
  let studentMarks = 49 ;

  if (studentMarks >= 90) {
    console.log("A");
  } else if (studentMarks >= 75) {
    console.log("B");
  } else if (studentMarks >= 50) {
    console.log("C");
  } else {
    console.log("Fail");
  }

  // 5. given two numbers , print the larger one

  let num1 = 132;
  let num2 = 23;
   
  if(num1 >num2){console.log(num1);}
  else{console.log( num2);}


  // String Methods

 // 1. Trim "Hello World" and log result.
  let msg = " hello world "
  console.log(msg.trim());

// 2. convert "Ganesh" to lowercase

let userName = "Ganesh";
console.log(userName.toLowerCase());

// 3. find the index of "code"in "I love to code"

let sentence = "I Love to code";
     
console.log(sentence.indexOf("code"));

// 4. slice "JavaScript" to get "Script"

let str = "Javascript";
console.log(str.slice(4));

// 5. replace "Blue" with "red" in "The sky is blue"

let strings = "The sky is blue."
console.log(strings.replace(/blui/i,"red"));



// Array Method 

// 1. create an array of 5 fruits and log it.
const arr = ["mango","watermelon","kiwi","apple","banana"]
console.log(arr);

// 2. add fruit to start and the end.

arr.unshift("papaya")
arr.push("cherry")
console.log(arr);

// 3. remove first and last fruit
arr.pop();
arr.shift()
console.log(arr);

// 4. reverse the array.

console.log(arr.reverse());

// 5.check if "apple " exist in array.
console.log(arr.includes("apple"));


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Mixed Problems >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 1. check if "hello" exist in array, if yes , print "Found", else "Not Found"

const newArr =["hi","hey","hello", "how"];
if(newArr.includes("hello")==true){
    console.log("Found");
} else{console.log("Not Found");}
 


 
// 3. password checker strong/weak.

let password ="@q233456";

if(password[0]==="@" && password.length>=8){
    console.log("Strong");
}else{
    console.log("Weak");
}

// 4. Given a name string , print last 3 char.
let strName = "Ganesh";
 let newstrName=strName.slice(-3)
 console.log(newstrName);

 // 5. Given two arrays, merge them and remove the last element.

 const primary =['a','b','c','d'];
 const secondary = ['e','f','g','h','j'];
  
 const mergedArr = primary.concat(secondary);
 mergedArr.splice(mergedArr.length - 1);
 console.log(mergedArr);

// 6. given an array of numbers print first and last

let numArr = [12,43,53,64,2,35,23,76,98,38,9];


  
    console.log(numArr[0],numArr[numArr.length-1]);

// 7. check if number is divisible by 3 and 5;

let numberNew =4 ;

if(numberNew%3===0 && numberNew%5===0){
    console.log(`${numberNew} divisible by 3 & 5.` );
} else if(numberNew%3===0 && numberNew%5!==0){
    console.log(`${numberNew} divisible by 3.`);
} else if(numberNew%5===0){
  console.log(`${numberNew} divisible by 5.`);
} else{ console.log(` ${numberNew}not divisible by 3 & 5.`);}

//Replace all "bad" words with "good"
let stringNew = "People are bad , because bad people influence them to do things."
let goodString = stringNew.replaceAll("bad","good");
console.log(goodString);

//Slice the first 3 item and log it

sliceArr= primary.slice(0,3);
console.log(sliceArr);
 
 //if a string contains "JS " replace it with "Javascript";
 
 let langStr = "JS is programming language";
 newLang = langStr.replaceAll(/JS/gi,'Javascript');
    console.log(newLang);




 

    

    //===============================================Mini Project=====================================

    // simple login validator

     

    let  UserId = prompt("enter username");
    let newPassword = prompt("enter password");

    if(UserId.trim().length>0 && newPassword.length >=8 && !newPassword.includes(" ")){
      console.log("login Successful.");
    } else{
      console.log("Login failed.");
    }
 git