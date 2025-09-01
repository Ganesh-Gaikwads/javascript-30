

/*
 Day 7 - JavaScript Learning
 Topics: Loops - for loop
 Author: Ganesh Gaikwad
 Date: 2025-08-19
*/

/*

// print 1 to 5 without loops
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// for loop;

// print 1 to 5 using loops

for(let i= 1; i<=5; i++){
    console.log(i);
}

for (let i=5; i>=1; i--){  //backward print
    console.log(i);
}

// print all odd number (1 to 15);
console.log("Odd Number");
for(let i=1; i<=15; i=i+2){
    console.log(i);
}

for(let i=15; i>=1; i=i-2){
    console.log(i);
}


// Even Number print 1 to 20;
console.log("Even Number");
for(let i=2; i<=20; i=i+2){
    console.log(i);
}

console.log("backward");
for(let i=20; i>=2; i=i-2){
    console.log(i);
}

// infinite loops
// for(let i =1; i>=0; i++){console.log(i);}
    



// Multiplication table of 5
console.log("5 table");
for(let i=5; i<=50; i=i+5){
    console.log(i);
}

//  ask user to print table number 



//let n = prompt("write your number");
// n= parseInt(n);

// console.log(`${n}: Table`);
 
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }


// nested for loop

for(let i=1; i<=3; i++ ){
    console.log(`Outer Loop :${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

*/


//======================================practice problem on loops=============================================

// A. For loop Drill
// 1. print numbers form 1 to 10
console.log("Numbers from 1 to 10");
for(let i=1; i<=10; i++){
    console.log(i);
} 

// 2. print the no form 10 to 1

console.log("Numbers form 10 to 1");
for(let i=10; i>=1; i--){
    console.log(i);
}

// 3. print all even numbers First 10

console.log(" First 10 Even Numbers");
 for(let i=2; i<=20; i=i+2){
    console.log(i);
 }

 // 4. print all odd number form 1 to 10

 console.log("odd number form 1 to 10");
 for(let i=1; i<=10; i=i+2){
    console.log(i);
 }

 // 5. print the multiplication table of 7

console.log("Table of 7");
 for(let i=7; i<=70; i=i+7){
    console.log(i);
 }


 // B. Intermediate (Logic Building )

 // 6. Print the  numbers divisible by 3 from 1 to 50
 
for( let i=1; i<=50; i++){
    if(i%3===0){
        console.log(i);
    }
}


// 7. Print all the numbers divisible by both 3 and 5  (1-100)

console.log("Numbers divisible by both 5 and 3 ");
for(let i=1; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log(i);
    }
}

// 8.print the sum of numbers form 1 to 100

console.log("um of numbers form 1 to 100");


let sum = 0;

for(let i=1; i<=100; i++){
    sum = sum+i //add i to sum each time
}    
    console.log(`The sum of number 1 to 100 :${sum}`);
  

// 9. print the factorial of a number  (5 to 120)
 
let factorial = 1;

for(let i=1; i<=10; i++){
    factorial= factorial*i
} 
console.log(factorial);

// 10. count how many numbers between 1-100 divisible by 7

let count = 0;
for(let i=1; i<=100; i++){
    if(i%7==0){
        count++;
        
    }
 
}
console.log(count);



// C. Advanced 

// 11. Reverse a String using  a  loop(.reverse() dont use )

//12. count vowels in string(loop + if)

let str = " I Love to Code";
count = 0;


let (let i=0; i= str.length-1,i)
