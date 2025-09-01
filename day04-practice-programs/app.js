

//================================String Methods Practice =================================

//eg.1  Password Validator

let Password= prompt("Enter Password please");

  newPass= Password.trim().toLowerCase();

   if((newPass[0] ==="@" || newPass[0]==="#")&& newPass.length>8){
    console.log(`your password is:${newPass}: Valid Password`);

   } else{
    console.log("Invalid Password");
   }

   
   eg.2  Name Formatting
  
    let  user = prompt("enter your name.").trim().toLowerCase();
    let newUser =user[0].toUpperCase()+user.slice(1);  
    console.log(newUser);

    

    let array = ["apple","banana","pineapple","mango","watermelon"];
      array.shift();
      array.pop();
      array.unshift("papai");
      array.push("jammon");

    array.reverse()

    console.log(array);
    
    



    //================================================================  Practice Problem 100 problems =============================================

    // variables and datatypes 

    //eg.1  Declare variable for your name,age, and city then print them in a single sentence.
        
       let name = "Ganesh";
       let age = 25;
       let city = "Pune";

       console.log("I am ",name,age,"year old , lived in", city );

    //eg.2 swap two number using a third variable
    let a = 24;
    let b = 23;

    a = a+b;
    b = a-b;
    a= a-b;
    console.log("a:",a,"b",b);


    let  x = 14;
    let  y =23;

    [x,y]=[y,x];
    console.log(`x:${x},y:${y}`);





    //eg.3 store your birth year  in a variable and calculate your age.

    let birthYear = 2004;
    let currentYear= 2025
     age = currentYear-birthYear;

     console.log(age);
  
     
     //eg.4 store a string  and convert it to a number using ();

     let string = "123";
     newString= Number(string)
     console.log(newString);
      
     //eg.5 check a type of a variable using typeof

     let Info = "vikas";
     let  Age = 45;
     let  isalive = true;

     console.log(typeof(Info));
     console.log(typeof(Age));
     console.log(typeof(isalive));

     //eg.6 store a boolean variable for "isStudent" and print a sentence based on it

     let studName = "Gautam";
     let isStudent = true;

     console.log(`${studName} is a student:  {isStudent}`);
 

     //eg.7  convert a number to a string using toSting() and print.
     let number =124;
    console.log(number.toString());

    //eg.8 create a variable with null and check it type.
    let remark = null;
    console.log(typeof(remark));  //object

    
    
    
    //eg.9 create a variable with undefined  and check it it  is strictly equal to undefined;

    let c = undefined;
    let d= undefined;

    console.log( c===d);


   //eg.10 concatenate your first and last string

    let firstName = "tony";
    let lastName ="stark";
    
    let fullName = firstName +"  "+ lastName;
    console.log(fullName);
    

    //eg.11 declare a variable using let and redeclare see what happens

    let demon = "loki";
    //let demon= "thinos"   //  error ocured due already declare demon variable  
  
   
   
    //eg.12 declare a variable using const and try to change its value (see whats happen)
    
    const pi = 3.14;
    
     //pi= 123;
     console.log(pi);   // can,t change its value , bcoz it is a const variable we can change only one time declare

    
     //eg.13  create a bigInt number and print it

     let bigInt= 535665765434566777777777777777433988588489494
     console.log(bigInt);

     // eg.14 store a float number and round it using math.round();

     let marks = 89.5;
     console.log(Math.round(marks)); //  this will round of and 90 Marks



     //15 store a number and get its square root using math.sqrt();
     
     let numbers = 144;
     console.log(Math.sqrt(numbers));

     //e.g 16 declare a variable and assign value a boolean based on comparison .

      let e = 10;
      let f =12;
      
    console.log(e<f);


    //eg.17  convert string to a number and add 7;

    let str =  '123';
    newStr = Number(str);
    console.log(newStr +""+7);

  //eg.18 create a variable that store your fullname and use length ot print how character it has

  let fullName1 = "Ganesh Gaikwad";
  console.log(`${fullName1} and its length is: `,fullName1.length);

  //eg.19 creating variable with a special character in the name like(_score) and print it
  
  let _name = "Robin";
  let _surname ="Sharma";
  console.log(_name,_surname);


  //eg.20 store your age and check if its is greater than 18 using boolean variable

  let _age = 24;
  let newage= age >18;
  console.log(newage);


 


  //========================================================== Operators 20 Problems ==========================================================

  //1. add two numbers and print the result

  let a =  134;
  let b = 166;
   
  console.log(`the sum of a and b is ${a+b}`);

  //2.Subtract two numbers and print the result.

 let  c = 245;
 let  d =  123;

 console.log(`the difference of c and d is : ${c-d}`);


//3.Multiply two numbers and print the result.
  let e = 35;
  let f =23;

  console.log(`the multiplication of  e and f is :${e*f}`);

//4.Divide two numbers and print the result.

let g = 200;
let h = 10;

console.log(`the division of g and h is :${g/h}`);

//5.Find the remainder of 27 ÷ 4.

let i = 27 ;
let j= 4;

console.log(`the remainder is :${i%j}`);

//6.Increment a number by 1 using ++.

let k = 5;
 console.log(` 5 is number increment by 1 :${++k}`);

//7. Decrement a number by 1 using --.

let l= 6;
console.log(`the 6 is decrement by 1 using -- operator :${--l}`);

//8.Add 5 to a number using +=.
let m = 5;
  
   console.log(m+=5);

 //9.Multiply a number by 3 using *=.

 let n=  7;
 console.log(n*=3);

 //10. Check if 12 is equal to "12" using ==.
 //11.Check if 12 is strictly equal to "12" using ===.
  let o = 12;
  let p= "12";
  console.log(`is 12 and 12 equal ? :${o==p}`);
  console.log(`is 12 and 12 equal to ? :${o===p}`);

//Compare 7 and 10 using < and > operators.
let num3= 7;
let num4 =10;
console.log(` 7 is greater than 10 .:${num3>num4}`);
console.log(`7 is less than 10.: ${num3<num4}`);

//Compare 5 >= 5
   
console.log(` is 5 >= 5 : ${5>=5}`);

// Combine two conditions using &&.

let age1 = 42;
let age2 = 42;

// console.log(`is age1 and age2 is equal${age1} && ${ age2}`);

console.log(age1===42 && age2 ===42);

// Combine two conditions using ||.
console.log(`is 4+1 is 5 and 9+1 10 : ${4+1===5 || 9+1===10}`);

// Negate a boolean using !.

let ram = "labour";
let isheStudent = true;
console.log(`is ram is student:${!isheStudent}`);



// Check if a number is odd using %.
let num = 18;
number = num%2!==0;
console.log(`is ${num} is odd :${number}  `);

// Check if a number is even using %.
let num1 = 18;
number=num1%2==0;
console.log(`${num1} is even: ${number}`);


// Assign a number to a variable and check if it’s not equal to 10.

let numCheck  = 12;
console.log(numCheck!=10);
// Create a boolean expression using multiple operators (e.g., (x>5 && y<10) || z===15).

let x = 14;
let y =10;
let  z =1;

console.log(x>y && y<x || z===1);


  
 //==================================string problems =============================


// 1. string declaration

  let firstName =  "Ganesh";

  console.log(`I am ${firstName}`);


// 2. convert string into uppercase.

    console.log( `the converted string in uppercase : ${firstName.toUpperCase()}`);    //

// 3.  convert string into lowercase.

    console.log(firstName.toLowerCase());


// 4. trim extra spaces from string

  console.log(firstName.trim());

// 5. concatenate two string
  
 let lastName =" Gaikwad ";
 console.log(`${ firstName + lastName}`);

// 6. use template literal

console.log(`welcome, ${firstName}!`);

// 7. slice method

console.log(lastName.slice(3,5));

// 8. replace method
console.log(lastName.replace("Gaikwad",'Gautam'));

// 9. Includes method

console.log(firstName.includes("ne"));

// 10. find indexof character

console.log(firstName.indexOf("n"));


// 11. get last char of string using length.

console.log(firstName[firstName.length -1]);


// 12. repeat string 5 time

console.log(firstName.repeat(5));


// 13. count how many char in string 

console.log(firstName.length);

// 14. combine trim

let newstr= lastName.trim().toLocaleUpperCase();
console.log(newstr);

// 15. convert a string "123" to a number 
let str= "123";
let newStr = Number(str)
console.log(newStr);

// 16 . split a string into array using .split("")

console.log(str.split(""));


// 17. join an array of word into a string 

let  fruit = ["Mango", "Apple"];
       
       console.log(fruit.join(" ,"));
 
// 18. check if a string start with "A" or "a";

let string = "apple";
console.log(string[0]==="A" || string[0]=== "a");

// 19. string end with z
let NewStr = "vwxyz";
 console.log(NewStr[NewStr.length-1]==="z");


 // 20. password strength checker
 let pass = "#pass123";
 let newPass = ( pass[0]==="@" || pass[0]==="#") && (pass.length >=8);
 console.log(`Is Password strong :${newPass}`);

 *


 

 //================================== Conditional Statements Problems=====================

 // 1. check if a number is positive or negative or zero;

 let num = 13;
 if(num >0){
  console.log(`${num}: Positive Number`);
 } else if(num<0){
  console.log(`${num}: Negative Number`);
 } else{
  console.log(`${num}`);

 }

 // 2. odd / even checker 
  
 if( num%2===0 ){
  console.log(`Even Number :${num}`);
 }else{
  console.log(`Odd Number :${num}`);
 }
 

 // 3. Leap year checker 

 let year = 2016; 

 if(year%4==0 && year%100!==0){
  console.log(`${year}: Leap year.`);
 } else{
console.log(`${year}:Not Leap year`);
 }

 // 4. grading system

 Marks = 99;

 if(Marks>= 80){
  if(Marks>=95){
    console.log(`${Marks}: A+`);
  } else{
    console.log(`${Marks} :A`);
  }
 } else{
  if (Marks>=75){
    console.log(`${Marks}: B`);
  } else if (Marks >=60){
    console.log(`${Marks}:C`);
  } else if(Marks>=50){
    console.log(`${Marks}:D`);
  } else{
    console.log("fail");
  }
 }

 // 5. check if eligible for vote

 let personAge = 34
 if(personAge>=18){
    console.log(`Person age is ${personAge},eligible for vote.`);
 } else{
    console.log(`Person age is ${personAge}, not eligible for vote.`);
 }
 
 // 6. traffic light system 

 let  signal = "Yellow";

 if ((signal === "Red")) {
   console.log(`Signal is ${signal}, Stop.`);
 } else if ((signal === "Yellow")) {
   console.log(`Signal is ${signal}. Please slow down.`);
 }else if(signal==="Green"){
  console.log(`Signal is ${signal}.go`);
 } else{
  console.log("signal is broken !");
 }

 // 7. bonus system based on year worked .

  let expYear = 1;
  
  if(expYear >=10){
    if(expYear>=15){
    console.log(`you work here for ${expYear}, you will get 5000 RS bonus.`);
  }  else{
    console.log(`You work here for ${expYear}.you will get 3000 rs bonus.`);
  }
}else{
  if (expYear >=5){
    console.log(`you have worked here for ${expYear}.you will get 1500 Bonus.`);
  } else{
    console.log("you are not eligible for bonus right now.");

  }
}

// 8. check golden string start with A/a. length 5.

let str = "apple";

if((str[0]==="A" || str[0]==="a") && str.length>=5){
  console.log(`${str} It is good string`);
} else {
  console.log(`${str} Is not a good string.`);
}

// 9. Nested condition  student pass  then grade.

  let marks = 98;

  if(marks>=80){
    if(marks >=90){
      console.log(`${marks} : Grade A`);
    }else{
      console.log(`${marks}: Grade B`);
    }
  } else {
    if(marks >= 60 ){
      console.log(`${marks}: Grade C`);
    }else if( marks>= 40){
      console.log(`${marks}:Grade D`);
    } else {
      console.log("You failed .");
    }
  }

  // 10. Find the largest of 3 number

  let a = 3;
  let b = 65;
  let c = 95;

  if(a < b){
     if(b>c){
      console.log( "B is greater.");
     } else {
      console.log(" C is greater.");
     }
  } else{
    console.log("A is greater");
  }

  // 11.  check two number have same last digit.

  let  x = 23;
  let  y = 53;

  if((x%10) ==(y%10)  ){
    console.log("same Digit");

  }else{console.log("odd digits");}



// 12. check number is divisible by 3  and 5 (FizzBuzz)

 let number = 45;

 if( number%3==0 ){
  if(number%3==0  && number%5===0){
    console.log("FizzBuzz");

    }else{
      console.log("Fizz");
    }
  }   else{
    console.log("Buzz"); }


    /* different way fizzbuzz
    let i = 25;

 if(i%3==0 && i%5==0){
  console.log("FIzzBuzz");
 } else{
  if(i%3==0){
    console.log("Fizz");
  }else{console.log("Buzz");}

 }

 } 
*/

  // 13. check password start with @/# and length>8  (Strong/weak).

  let password = "@pass123";

  if((password[0]==="@" || password[0]==="#") && password.length>=8){
    console.log(`${password}: Strong.`);
  } else{console.log(`${password}:Weak`);}
 
// 14. switch statement : print the day of the week based on number 

let day = 4;

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
    console.log("please choose option.");

    }

     
// 15. Switch Statement : print the quarter based on month

 let  Month = 11;

 switch(true){
    case Month>=1 && Month <=3:
      console.log("Quarter : 1");
      break;
    case Month>=4 && Month<=6:
      console.log("Quarter : 2");
      break;
    case Month >=7 && Month<=9:
      console.log("Quarter : 3");
      break;
    case Month>=10 && Month <=12:
      console.log("Quarter : 4");
      break;
    default:
      console.log("Please Enter Correct Months number.");

 }

 // 16. check number is in range  1 -100
   let digit = 11;
   if(digit>=1 && digit<=100){
    console.log(`${digit}: Number is in range of 1-100`);
   } else {
        console.log("Not in range 1-100.");
   }


   // 17. ticket price based on age:
   //nested version
    let CustomerAge = 19;

     if(CustomerAge>=10){
      if(CustomerAge>=18){
        console.log("Price:250");
      }
      else {
        console.log("Price:150");
      }
     }else{
      console.log("Free show.");
     }


     //short version 
     if(CustomerAge>=18){
      console.log("Price:250");
     } else if(CustomerAge>=10){
      console.log("Price:150");
     } else{
      console.log("Free show");
     }

     // 18. truthy falsy .

     let input = "srt";

     if(input!==true){
      console.log("false");
     } else {
      console.log("true");
     }

     // 19. print season based on month

     let months = 5;

     if(months>=1 && months <=4){
      console.log("Summer");
     } else if(months>=5 && months <=8){
      console.log("spring");
     } else if(months >=9 && months<=12){
      console.log("Winter");
     } else{
      console.log(" something is Wrong! ");
     }

     // 20. combine multiple conditions (eg. age, marks , and attendance)

     let age =22 ;
     let mark = 86;
     let attendance = 79;

     if( age>=21 && attendance>=75){
      if(mark >=85 ){
        console.log("Approved for next Round");
      } else{
        console.log("Try again, you can do it .");
      }
     } else{
      console.log("You are not eligible for exam. ");
     }

     

     //================================ Arrays ===============================================

     // 1.create an array of fruits 

     let fruit = ["mango ","apple","strawberry","watermelon","chikoo"];

     // 2. Access the first element

     console.log(fruit[0]);

     // 3. replace an element in array
    
     let newFruits =fruit.splice(0,1,"Peru");
    console.log(fruit);

    // 4. add element to end 
    console.log(fruit.push("banana"));
    console.log(fruit);

    // 5. remove the last element 

    fruit.pop();
    console.log(fruit);

    // 6. add element at the beginning
    fruit.unshift("carrot");
    console.log(fruit);

    // 7. remove first element 
      fruit.shift();
      console.log(fruit);

   // 8. find the index of an element

    console.log(fruit.indexOf("watermelon"));

  // 9. check element exist use include();
  console.log(fruit.includes("chikoo"));

  // 10. merge two arrays
  let primary = [1,2,3,4,5,8,7,6,7];
  let secondary=[8,9,,0,11,1,3,14];

  console.log(primary.concat(secondary));
   
  // 11. reverse an array.

  console.log(primary.reverse());

  // 12. slice an array
  console.log(fruit.slice(2,5));

  // 13. splice an array to remove 2 element form index one
     newarr =fruit.splice(1,3)
    console.log(newarr);


// 14. splice an array to add 2 elements at index 1

  console.log(newarr.splice(1,0,"kakadi","bit"));
  console.log(newarr);

  // 15. sort array of numbers
console.log(secondary.sort());

// 16. sort an array of string 
console.log(newarr.sort());

// 17. create nested array 2d

let array = [[1,2],[3,4]];
console.log(array);

//18.access an element form nested array
console.log(array[1][1]);

//19. count elements in array
console.log(array.length);

// remove duplicates from array
 console.log(... new Set(primary));