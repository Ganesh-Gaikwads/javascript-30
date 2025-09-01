/*
 Day 2 - JavaScript Learning
 Topics: Conditional Statements, Logical Operator,Alert & Prompts
 Author: GaneshGaikwad
 Date: 2025-08-11
*/

//              <<<<<------------- conditional Statements  --------------->>>>>



//========================= if Statement ===============================

let a = 10; 
let b = 23;

if(a<b){
    console.log("a is less than b");
} 

//practice question = create a  traffic light system that shows what to do based on color

//traffic light system 

let color = "Yellow"

if(color =="Red"){
    console.log("Please Stop!,signal is red.  "); 
} 

if(color=="Green"){
    console.log("You can go now!,signal is green.");
}

if(color=="Yellow"){
    console.log("Please Slow down!,signal is Yellow.");
}




// ===================================================================== else it statement =========================================================


let age = 21;
let minimumAge = 18;

if(age>= minimumAge){
    console.log("You can eligible for Vote");
 } 
 else if(age < minimumAge){ console.log("You are not eligible for vote");
    
 } 


//example-grading system
let marks = 94;

if(marks >= 95){
    console.log("congratulations you got : A+ Grade.");
} 
else if(marks >= 90){
    console.log("congratulations you got : A Grade.");
} 
else if(marks >= 75){
    console.log("congratulations you got : B Grade.");
}
else if(marks >= 65 ){
    console.log("congratulations you got : C grade.");
} 
else if(marks >= 40){
    console.log("congratulations you got: D Grade. ");
} 
else if(marks <=40){
    console.log(" You failed !");
}



// =============================== else statement   ============================================================ 



let month = "March";

if(month ==="february"){
    console.log("this season is summer");

} else if(month ==="june") {
  console.log(" this is spring.");
} 
else if(month === "October"){
    console.log("this is winter season.");
} else{
    console.log("something is wrong ! try again.");
}



// Practice code using three of conditions. if, else if, else 


    let Color = "R";

    if(Color == "Green"){
        console.log( "signal is green, you can go.");
    } else if(Color == "Yellow"){
        console.log( "signal is yellow, please slow down.");
    }
    else if(Color=="Red"){
        console.log("signal is red , please stop.");
    } else {
        console.log("technical error");
    }


    // Practice question 


  let size = "XL";

  if(size=="XL"){
    console.log("XL size Popcorn Price is : 250");
  } else if(size =="L"){
    console.log(" L size Popcorn Price is : 200");
  } else if(size =="M"){
    console.log("M size Popcorn Price is : 100");
  } else if(size=="S"){
    console.log("S size popcorn price is 50.");
  }


  // ===========================   Nested If else    ===================================


 //eg. 1

  let Marks = 45;

  if (Marks >=35){
    console.log(" Pass ");
    if(Marks >=80){
        console.log("Grade: O)");
    } else{console.log("Grade :A");}
  } else{
    console.log(" Better luck , Next time !");
  }

  //eg.2
 
  let Age = 76;

if (Age <= 12) {
    console.log("ticket price is: 100");
} else if (Age >= 60) {
    console.log("ticket price is: 120");
} else if (Age < 60) {
    console.log("ticket price is: 150");
} else {
    console.log("on Wednesday everyone should get 50% off.");
}












//=========================== Logical Operator  ====================================


//Qs-1. A "good string" is a string that starts with the letter 'a' & has a length>3. Write a  Problem to find if a string is good or not.



let str = "app";

if(str[0]=="a" && str.length>3){
    console.log("its is good string :",str);
} else {
    console.log("this is not good string.");
}
  

//Q-2. Predict the output of following code

let num = 12;

if((num%3 ===0) && ((num+1 ==15) || (num-1 ==11))){
 console.log("safe");
} else{
    console.log("Unsafe");

}

//answer will be "safe"


/*============================ truthy and falsy  ===================================

        everything in js is true or false (in boolean contex). this does'nt mean their value itself
        is false or truth but they are  treated as true or false it taken in boolean Contex. 
        
        falsy values :-  false, 0 ,-0, 0n(BigInt values), ""(Empty string),NULL , Undefined , NaN.
        truthy values :- everything else.

*/



//eg.1

if(true){
    console.log("the value is true");
} else {
    console.log("it is false value.");
}  

//eg.2

if(false){
    console.log("value is true");
} else{
    console.log("the value is false");
}

//eg.3 
if(" "){
    console.log(" true value");
} else{
    console.log( "false value");
}


//eg.4 
let input = null;

if(input){
    console.log("true values");
} else{
    console.log("false value");
}



//=======================================  switch statement ============================================
//eg.1

let colour = "yellow";

switch(colour){
    case "green":
        console.log("go");
        break;
    case "yellow":
        console.log(" slow down");
        break;
    case "red":
        console.log("stop");
        break;
    default:
        console.log("enjoy ride.");
}

//eg.2  use switch statement to print the day of the week using a number variable "day" with values 1 to 7.


let day = 7;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong Entry");
    
}

/*
============================== Alert and Prompt =====================================
*/
// alert

alert("please try again") ;                        //alert show on screen to user
console.log("this is a simple  msg");                // print msg on log
console.error("this is a error msg");                 // show error msg on log
console.warn("this is a warning msg");               // show warning on log
  
//prompt

let firstName = prompt("enter your name");
let lastName = prompt("enter last name");
let fullName = firstName +" "+ lastName;

alert("welcome"+ " " + fullName);
  


  //  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  Js Practice Questions  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 //Q.1_create a number variable num with some value. now print it "good" if the number is divisible by 10  and  print "bad if it is not"


     let number  = 40 ;

     if(number % 10==0){
        console.log("good");
     } else{
        console.log("bad");
     }


 //Q.2_ take the user's name and age as input using prompts. then return back the following statement to the user as an alert (by substituting their name and age) name is age year old.
  
 let name = prompt("enter your name");
 let year = prompt("enter you age");
 alert(`${name} is ${year} year old.`);




 /* Q.3_ Write a switch statement  to print the month in a quarter.  
 Months in Quarter 1 : January , February, March.
 Months in Quarter 2: April, May , June.
 Months in Quarter 3 : July, August, September.
 Months in Quarter 4 : October, November, December. 
 
 */

 let Quarter = 3;

 switch(Quarter){

    case 1:
        console.log("January , February, March.");
        break;
    case 2:
        console.log("April, May , June.");
        break;
    case 3:
        console.log("July, August, September.");
        break;
    case 4:
        console.log("October, November, December.");
        break;
    default:
        console.log("Wrong Entry");

 }


 // Q.4  A String  is a golden string  if it start with the character "A" or "a" and has a total length greater than 5. for a given string print it is golden or not.

 let string = "ApnaCollege";
 if ((string[0] === "A" || string[0] === "a") && string.length > 5) {
   console.log("  it is a golden string.");
 } else {
   console.log("Not");
 }

//Q.5  write a program to find the largest  of 3 numbers.

let e = 19;
let f = 94;
let g = 18;

if (e >= f && e >= g) {
    console.log("E is greater");
} else if (f >= e && f >= g) {
    console.log("F is greater");
} else {
    console.log("G is greater");
}

//Q.6 write a program to check if 2 numbers have the same last digit. eg . 32 and 47852 have the same last digit is 2

let num1 = 32675;
let num2 = 47;

if((num1%10) == (num2%10)){
    console.log("numbers have the same last digit which is :",num1%10);
} else{
    console.log("numbers don't have the same last digit");
}


//========================================== Practice Conditional Statements =============================================================

// FizzBuzz using if-else
let num4 = 7;

if ((num4 % 3 === 0) && (num4 % 5 === 0)) {
  console.log("FizzBuzz");
} else if (num4 % 3 === 0) {
  console.log("Fizz");
} else if (num4 % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num4);
}

// FizzBuzz using nested if-else
let num3 = 15;

if (num3 % 3 === 0) {
  if (num3 % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log("Fizz");
  }
} else {
  if (num3 % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num3);
  }
}

// Grading system with if-else
let userName = prompt("Enter your name here.");
let Grade = prompt("Enter your marks here.");

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75 && marks <= 89) {
  console.log("Grade: A");
} else if (marks >= 50 && marks <= 74) {
  console.log("Grade: B");
} else if (marks < 50) {
  console.log("Fail");
} else {
  console.log("Something is wrong");
}

// Grading system with nested if-else
let userName1 = prompt("Enter your name here.");
let marks1 = parseInt(prompt("Enter your marks here."));

if (marks1 >= 75) {
  if (marks1 >= 90) {
    console.log(`${userName1} Grade: A+`);
  } else {
    console.log(`${userName1} Grade: A`);
  }
} else {
  if (marks1 >= 50) {
    console.log(`${userName1} Grade: B`);
  } else if (marks1 < 50) {
    console.log("Fail");
  } else {
    console.log("Something is wrong. Please enter correct credentials");
  }
}

// FizzBuzz again using if-else
let numbers = 15;

if ((numbers % 3 == 0) && (numbers % 5 == 0)) {
  console.log("FizzBuzz");
} else if (numbers % 3 == 0) {
  console.log("Fizz");
} else if (numbers % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(numbers);
}

// FizzBuzz nested version
let number2 = 90;

if (number2 % 3 === 0) {
  if (number2 % 5 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log("Fizz");
  }
} else {
  if (number2 % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number2);
  }
}

// Bonus based on years worked
let years = parseInt(prompt("Enter the years you worked here"));

if (years >= 10) {
  console.log(`Year ${year}, 50000 RS. bonus`);
} else if (years >= 5) {
  console.log(`Year ${years}, 2000 RS. bonus`);
} else {
  console.log(`Year ${years}, 500 RS. bonus`);
}

// Switch statement for day of week
let dayNumber = parseInt(prompt("Enter day number"));

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Password strength checker
let password = prompt("Password:");

if ((password[0] === "@" || password[0] === "#") && password.length >= 8) {
  console.log("Strong");
} else {
  console.log("Weak");
}
