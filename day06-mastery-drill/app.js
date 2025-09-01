

// Day2. Js core MasteryDrill 
// A. Variables, Operator & Conditionals (6-Problems)

//1. take two numbers and print the greater one without  using if  else.

let x = 53;
let y = 473;
console.log( x>y ? "x is greater" : "y is greater");
   

// 2. Take a number and check if its prime or not



// 3. Temperature in celsius, convert it into Fahrenheit.

let tempNum = 37;
let  celsiusToFahrenheit = tempNum*9/5+32;
console.log(celsiusToFahrenheit);

// 4. Write a program that checks it three sides can form a triangle.

let side1 = 54;
let side2 = 54;
let side3 = 54;

if(
    side1+side2>side3 &&
    side2 +side3>side1 &&
    side3+side1>side2){
        console.log("three sides form a triangle");
    } else{
        console.log("Sides can not form triangle");
    }

    // 5. Write a program to calculate the electricity bill (unit * rate with different rates of slab)

     let lightBill = 2000;
     let totalUnit  = 45;
     
     let unitRate = lightBill/totalUnit;

     console.log(Math.round(unitRate));


    // 6. Take a number and print "Buzz" if divisible by 7 , "fizz" if divisible by 5,"FizzBuzz" if divisible by both.
    
    let divNum = 10;

    if (divNum % 5 === 0 && divNum % 7 === 0) {
      console.log("FizzBuzz");
    } else if (divNum % 5 === 0) {
      console.log("Fizz");
    } else if (divNum % 7 === 0) {
      console.log("Buzz");
    } else {
      console.log(divNum);
    }

   // B. String Mastery -6 Problem 
   
   // 1. check if a string is a palindrome 
    
   let str = "madam";
     
   let reverseStr = str.split('').reverse().join('');
   console.log(reverseStr);
    
   if(str===reverseStr ){
    console.log("String is Palindrome");
   } else{
    console.log("String is not a palindrome.");
   } 


   // count the numbers of vowel in string
   


   //replace every space in string with "_".

   let spaceStr = "I do coding everyday."
   let modifyStr = spaceStr.replaceAll(" ","_");
   console.log(modifyStr);
















































   /*

 

//Write a JavaScript Program to get the first n element of an array [ n can be any positive number].For example for array [7,9,0,-2] and n=3 print [7,9,0]
 let array = [7,9,0,-2]
 let n = 3;
 let firstElementArr =array.slice(0,n) ;
 console.log(firstElementArr);


//Write a JavaScript proram to get the last element of  an array . [n can be any positive number]. for example for array = [7,9,0,-2] and n = 3 print [9,0,-2];

let lastElementArr = array.slice(array.length-n);
console.log(lastElementArr);


//Write a JavaScript program to check whether string is blank  or not

let string = " ";
if(string.length ==0){
  console.log("Blank");
} else{console.log("Not blank");}

//write a js program to test  the character at the given (character) index is  lower case ;

let stringChar = "Ganesh";
let idx = 0;
if(stringChar[idx]==stringChar[idx].toLowerCase()){
  console.log("lowercase");
 } else{ console.log("Uppercase");
 }

 //Write a JavaScript program ot strip leading and trailing spaces form a string.
let strr = "                 soldier";
console.log(`original string =${strr}`);
console.log(` string without spaces = ${strr.trim()}`);

// Write a JavaScript programtocheckifanelementexistsinanarrayornot.theganeshgaikwad@gmail.com
let arr = ["hello",'a',23,64,99,-6];
let item = 64;

if(arr.indexOf(item) !=-1){console.log("Element Exist in Array");

}else{
  console.log("element doesn't exist in Array. ");
}









*/
















































/*
let x = 142;
let y =34;

let greaterNumber = (x > y) ? "x is greater": "y is greater";
console.log(greaterNumber);;

// 2. take a number and check its prime or not

let num = 19;
 
if(num >1 && num%2!==0){
    console.log("prime");
}else{
    console.log("Not Prime");
}

// given tempreture in Celsius , convert it int Fahrenheit

let tempreture = 7;
let temptoFahrenheit =  tempreture*9/5+32
console.log(`${temptoFahrenheit }:F`);


// write a program that check if three sides can form a triangle.

let side1 =12 ;
let side2 = 12;
let side3 = 12;

if((side1 ==true) && ( side2==true) && ( side3==true)){
            console.log(" 3 side have given it can form triangle");
} else{ 
    if(side1==false){ console.log("side1 not avalable");

    }else if(side2 ==false){
        console.log("side2 is not avalable");
    }else{
        console.log("side3 is not available");
    }
    
}

*/