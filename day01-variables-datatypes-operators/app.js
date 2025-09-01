/*
 Day 1 - JavaScript Learning
 Topics: Variables, Data Types, Template Literals, Operators
 Author: Ganesh Gaikwad
 Date: 2025-08-11
*/



//     =============================   variables and datatypes  ======================


let firstName = "Ganesh";                //string
 let lastName ="Gaikwad"                 //
 let age = 24;                           //Number
 let isAdult = true;                     //boolean 
 let married ;                           //undefined type which is  didn't declare variable value.
 let dob = null;                         //  the null value represent the international absence of any object value.


 //print variables on (log)

 console.log(firstName);
 console.log(lastName);
 console.log(age);
 console.log(isAdult);
 console.log(married);
 console.log(dob);



//template literals 
 
//ex-1
console.log(`he is ${firstName} ${lastName}, and his age is ${age}`);

//ex-2

let a = 23;
let b = 27;

console.log(`the total of a & b is ${a+b}`);



//  ======================  Operation in js  ======================================== 

let x = 23;
let y = 27;

//addition 
console.log("the sum is:",x+y);

//subtraction 
console.log("the difference is: ", x-y);

//multiplication 
console.log("the prod is :", x*y);

// division 
console.log("the division is: ",x/y);

//modulo
console.log("the remainder is :", x % y);

//exponentiation power operator
console.log("the power is:", x**y);



//  ========================================   unary operators  ========================================= 

let m= 10; 
let n= 6;


console.log(` before execution : ${m++}`); // first m value is 10 after run program it will add 1 it save m value as 11 after 
console.log(`after execution : ${++m}`); // also add 1 and it make value 12 after this line


console.log(`before execution : ${n--}`);    // before execution this line n value is 6 and after it save as 5 and next line 
console.log(`after execution : ${--n}`)  //then from 5 it diff 1 and make it 4 


//  =============================== comparison  operators  ===========================================

let s = 12;
let t = 14;

console.log( `is s is greater than t : ${s>t}`);                 //greater than >
console.log(`is s is greater than equal to  t : ${s>=t}`);       // greater than or equal to >=
console.log(`is s is less than t : ${s<t}`);                     // less than  <
console.log(`is s is less than and equal to  t : ${s<=t}`);      //less than and equal to >=
console.log( `is s is equal to  t : ${s==t}`);                   //compare values not type (equal to ==)
console.log( " s is not equal to t :",s!=t);                     // is not equal to !=
console.log( "is equal to ",s===t);                              // is equal to === (compare type or values)