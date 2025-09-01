//  100 problem set (pre-loop) - Section-A Variables & Operators 
// 1.Swap two number without third variable

let a =50;
let b=40;

a = a+b;
b = a-b;
a= a-b;
console.log(`a : ${a}, b: ${b}`);

// 2. Find the remainder when one number is divided by another.

 let c = b%a;
 console.log(`the remainder is : ${c}`);

 // 3. Check if a number is even or odd.
 let num = 3;
 let checkNum =( num%2==0 )? "even number" : "odd number";
console.log(checkNum);
 
// 3. Find the square of a number.

let squareNum = num*num;
console.log(`square of ${num} : ${squareNum}`);

// 4. Find the cube of a number.

let cubeOfNum = num**num;
console.log(`the cube of ${num} : ${cubeOfNum}`);

// 5. Calculate the area of a rectangle.
let length = 12;
let width = 8;
let area = length*width;
console.log(`area of rectangle : ${area}`);

// 6. Calculate the area of a circle.
let radius= 2;
let areaOfCircle = Math.PI* (radius**2);
console.log(areaOfCircle);

// 7. Convert kilometers to miles.

let km = 7;
let mile =km * 0.62137;
console.log(`${km} is equal to : ${mile} mile.`);

// 8. Convert Fahrenheit to Celsius.

let temp = 32;
let Fahrenheit= (temp *9/5) +32;  
console.log(Fahrenheit);

// 9. Convert Celsius to Fahrenheit.

let Celsius =  (Fahrenheit -32) * 5/9;
console.log(Celsius);