/*
 Day 9 - JavaScript Learning
 Topics:  Practice all loops Drill 50+ questions
 Author: Ganesh Gaikwad
 Date: 2025-08-21
*/

// Level -1 

// 1. print numbers from 1 to 10

console.log("Number form 1 to 10.");
for(let i=1; i<=10; i++){
    console.log(i);
}

// 2. print numbers form 10 to 1.
console.log("numbers form 10 to 1.");
for(let i=10; i>=1; i--){
    console.log(i);
}

// 3. Print all even numbers between 1 and 20.

console.log("even numbers between 1 and 20.");
for(let i=2; i<=20; i=i+2){
    console.log(i);
}

// using conditional statement 
console.log("used conditions");

for(let i=1; i<=20; i++){
    if(i%2===0){
        console.log(i);
    }
}


// 4. Print all odd numbers between 1 and 20.

console.log(" odd numbers between 1 and 20.");
for(let i=1; i<=20; i=i+2){
    console.log(i);
}


// using conditional statement 
console.log("used conditions");
for(let i=1; i<=20; i++){
    if(i%2 !==0){
        console.log(i);
    }
}



// 5. Print multiplication table of 5.

console.log("Table of 5");
for(let i=1; i<=10; i++){
    console.log(`5 x ${i}=  ${5*i}`);
}


// 6. Print squares of numbers from 1 to 10.

 console.log("squares of numbers from 1 to 10.");
 for(let i=1; i<=10; i++){
   
    console.log( `${i}: ${i*i}`);
 }



 // 7. Print cubes of numbers from 1 to 10.

 console.log("Cubes of numbers from 1 to 10.");
 for(let i=1; i<=10; i++){
    console.log(`${i} :${i*i*i}`);
 }


 // 8. Find the sum of numbers from 1 to 50.

 console.log(" sum of numbers from 1 to 50."); 
 let sum = 0;
 for(let i=1; i<=50; i++){
     sum= sum+i;
 }
 console.log(`the sum of numbers from 1 to 50 : ${sum}`);


 // 9. Find the sum of even numbers from 1 to 50.

  let sumEven1 = 0;
 for(let i=2; i<=50; i=i+2){
        sumEven1= sumEven1+i;
 } console.log(`sum of even numbers from 1 to 50 : ${sumEven1}`);

 // using conditional statement 

let sumEven=0;
for(let i=1; i<=50; i++){
    if(i%2===0){
        sumEven=sumEven+i;
    }
} console.log(sumEven);


 // 10. Find the sum of odd numbers from 1 to 50.

    let sumOdd = 0;
    for(let i=1; i<=50; i=i+2){
        sumOdd=sumOdd+i;
    } console.log(` sum of odd numbers from 1 to 50. ${sumOdd}`);


    // using conditional statement 
 
let oddSum=0;
for(let i=1; i<=50; i++){
    if(i%2!==0){
        oddSum=oddSum+i;
        console.log(i);
    }
} console.log(oddSum);



    // Level -2 Pattern and math.

    // 11. Print all multiples of 7 from 1 to 100.
    
    console.log("all multiples of 7 from 1 to 100.");
    for(let i=7; i<=100; i++){
        if(i%7===0){
            console.log(i);
        }
    } 

    // 12. Count how many numbers between 1 and 100 are divisible by 9.

    let count = 0;
    for(let i=1; i<=100; i++){
        if(i%9===0){
            count = count+1;
        }
    } console.log( `numbers between 1 and 100 are divisible by 9 is: ${count}`);

    // 13. Print factorial of a given number (e.g. 5 → 120).
    
    let num =5;
    let factorial = 1;
    for(let i=num; i>=1; i--){
        factorial=factorial*i
       
    }  console.log(factorial);

    // 14. Find the product of numbers from 1 to 10.
    
    let product = 1;
    for(let i=1; i<=10; i++){
        product=product*i;
    } console.log(product);

    // 15. Print reverse of a number (e.g. 123 → 321).
    let number =123;
    let reversed_Number = 0;
     while(number>0){                                        // understand the code and logic using dry run.
        digit=number%10;
        reversed_Number = reversed_Number*10+ digit;
        number=Math.floor(number/10)
     }   
        console.log(reversed_Number);

     // 16. count digits of a number using loop
     // first Approach- Using String (Easy way);
     let digits = 2109200990;
     let counts = 0;
     let digitArr = digits.toString().split('');

     for(let i=0; i<digitArr.length; i++){
        counts++;
     } console.log(counts); 

     // Approach-2 - using loop + Math(Better for logic)

        while(digits > 0){
            counts ++;
             digits= Math.floor(digits / 10);
        } 
        console.log(counts);
    

    

    