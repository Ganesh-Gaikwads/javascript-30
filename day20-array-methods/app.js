// Array Methods

// 1. forEach

let arr =[1,2,3,4,5];

arr.forEach((el)=>{
    console.log(el);
})




// let print = function(el){
//     console.log(el);
// }

arr.forEach(function(el){
    console.log(el);
} );





// Array Practice 

let arrays = [1,2,3,4]; //  use [] for 99%  of cased = cleaner and predictable
let arr2 = new Array(5);  // when specifically want an empty arr ot fixed length
let arr3 = new Array(23);
console.log("print empty array ",arr2);


// Accessing  by index 

console.log(arr3[0]);
console.log(arrays[2]);

// Length Property 

console.log(arrays.length); // use to know arrays length


//Manual push/pop logic (without using push);
arrays[arrays.length]=40; // Manual Push
console.log(arrays);

arrays.length = arrays.length-2; // Manual pop
console.log(arrays);  


// # practice
// 1. Manually add 3 new numbers to an array (without push).
let ar = [10,20,30];
ar[ar.length]=40;
ar[ar.length]=50;
ar[ar.length]=60;
console.log(ar);

// 2. Manually remove the last element (without pop).
ar.length=ar.length-1; // Manual pop
console.log(ar);  

//  Print array elements one by one with for loop

// 1. iteration style:  (classic for loop)
for(let i=0; i<ar.length; i++){
    console.log(ar[i]);
}


// 2. for..of(cleaner)
console.log("using for..of loop for more cleaner");

for(let el of ar){
    console.log(el);
}

// 3. forEach (built-in, but practice last)
console.log("use forEach built in method");

ar.forEach( num =>console.log(num));


// # Practice 
// 1. Print all elements in [1,2,3,4,5] with for loop and for...of.
let elements = [1,2,3,4,5];

for(let i=0; i<elements.length; i++){
    console.log(elements[i]);
}

// using for..of loop
for(let num of elements){
    console.log(num);
}

//Find the sum of [5, 10, 15, 20] manually with a loop.
let Arr = [5, 10, 15, 20];
let sum = 0;
for(let i=0; i<Arr.length; i++){
    sum+=Arr[i];
} 
console.log(`sum of array : ${sum}`);

// Count how many odd numbers in [2, 5, 7, 8, 10].
let Arr1 = [2, 5, 7, 8, 10];
let count = 0;
for(let i=0; i<Arr1.length; i++){
    if(Arr1[i]%2!==0){
        count++;
    }
} 
console.log(count);

// Mini Problems

// 1. Find the largest and smallest number manually.

let max = Arr1[0];
let min = Arr1[0];

for(let i=0; i<Arr1.length; i++){
     if(Arr1[i]<min) min=Arr1[i];
    if(Arr1[i]>max) max=Arr1[i];
   
    } 
console.log("small number:",min);
console.log("largest number",max);


//Reverse an array manually (without reverse())
let revArr1 = [];
for(let i=Arr1.length-1; i>=0; i--){
    revArr1.push(Arr1[i]);
} 
console.log("Original Arr :",Arr1);
console.log("Reverse Array :",revArr1);

// Count frequency of 7 in [7, 2, 7, 3, 7, 4].
let freq = [7, 2, 7, 3, 7, 4];
let num = 7;
let freCount=0;
for(let i=0; i<freq.length; i++){
    if(freq[i]===num){  // condition can check number of 7 but i take variable to check other numbers also
        freCount++;
    }  
} 
console.log(freCount);

// Merge two arrays manually (without concat).
 
let  arrOne = [1,2,3,4];
let arrTwo =[5,6,7,8];
let merged =[ ];

// first w'll  push arrOne to mergerd arr through for loop

for(let i=0; i<arrOne.length; i++){
    merged[merged.length]=arrOne[i]
} 

// now we'll push arrTwo 

for(let i=0; i<arrTwo.length; i++){
    merged[merged.length]=arrTwo[i]
}

console.log(merged);


// Array manipulation drill

  
 
 // Array Manipulation Drill Set (50 Questions)**

//==== Level 1: Fundamentals (10 Qs)
//1. Create an array of numbers from 1 to 10 and print it.
let numArr = [1,2,3,4,5,6,7,8,9,10];
console.log(numArr);

//2. Access the first and last  element of an array.
console.log(`fist element of an array : ${numArr[0]}`);
console.log(`last element of an array :${numArr[numArr.length-1]}`);


//3. Find the length of `[5, 8, 12, 20, 33]`.
let findLength = [5, 8, 12, 20, 33];
console.log(findLength.length);

//4. Manually push a number at the end of `[1,2,3]`.
let pushNum = [1,2,3];
  pushNum[pushNum.length] = 4;
  console.log(pushNum);

//5. Manually remove the last element of `[10, 20, 30, 40]`.
let lastElement = [10, 20, 30, 40];
lastElement.length=lastElement.length-1;
console.log(lastElement);

//6. Add a number to the beginning of `[2,3,4]` manually.
let beggin = [2,3,4];
beggin[beggin.length-3]=1;
console.log(beggin);

//7. Remove the first element of `[100, 200, 300]` manually.
let firstel = [100,200,300];
firstel.length=firstel.length-1;
console.log(firstel);

//8. Print each element of `[11,22,33,44]` using a `for` loop.
let element = [11,22,33,44];
for(let i=0; i<element.length; i++){
    console.log(element[i]);
}

//  9. Print each element of `[11,22,33,44]` using `for...of`.


for(el of element){
    console.log(el);

}

//10. Print each element of `[11,22,33,44]` using `forEach()`.

console.log("use forEach method to print element");
element.forEach( el=>{
    console.log(el);
})





// Level 2: Searching + Summation (10 Qs)

// 11. Find the sum of `[5, 10, 15, 20]`.
 let add =  [5, 10, 15, 20];
 let sumArr = 0;

 for(let i=0; i<add.length; i++){
    sumArr+=add[i];
 } 
 console.log("sum of arr: ",sumArr);

 //12. Find the product of `[2, 3, 4]`.
 let Arr4= [2,3,4];
 let product = 1;
  
 for(let i=0; i<Arr4.length; i++){
    product*=Arr4[i];
 }
 console.log(product);

 
// 13. Count how many even numbers are in `[1,2,3,4,5,6,7,8,9,10]`.

let Num = [1,2,3,4,5,6,7,8,9,10];
let evenCount =0;
for(let i=0; i<Num.length; i++){
    if(Num[i]%2===0){
        evenCount++;
    }
} console.log(evenCount);

// 14. Count how many odd numbers are in `[1,2,3,4,5,6,7,8,9,10]`.
 let oddCount = 0; 
for(let i=0; i<Num.length; i++){
    if(Num[i]%2!==0){
   oddCount++
    }
} console.log(oddCount);

// 15. Check if `25` exists in `[5,10,15,20,25,30]`.
 let checkNum = [5,10,15,20,25,30];
 let exitst = true;
 
 for(let i=0; i<checkNum.length; i++){
    if(checkNum[i]===25) exitst+=true;
 } console.log(exitst);



// 16. Find the index of `50` in `[10,20,30,40,50]`.
// 17. Check if `"apple"` exists in `["mango","banana","apple","grapes"]`.
// 18. Find the maximum number in `[3,9,2,5,7]`.
// 19. Find the minimum number in `[3,9,2,5,7]`.
// 20. Count how many times `7` appears in `[7,2,7,3,7,4]`.

 

// Level 3: Transforming Arrays (10 Qs)

// 21. Create a new array with each element of `[1,2,3,4,5]` doubled.
// 22. Square each number in `[2,4,6,8]`.
// 23. Convert `["a","b","c"]` to uppercase.
// 24. Filter only even numbers from `[1,2,3,4,5,6]`.
// 25. Filter only odd numbers from `[1,2,3,4,5,6]`.
// 26. Remove all negative numbers from `[1,-2,3,-4,5]`.
// 27. Add 5 to each element of `[10,20,30,40]`.
// 28. Extract names starting with "A" from `["Aman","Ravi","Anita","John"]`.
// 29. Find all numbers greater than 50 in `[23,67,89,12,45,90]`.
// 30. Convert `[1,2,3]` into `["1","2","3"]`.

 

//Level 4: Combining + Modifying Arrays (10 Qs)

// 31. Merge `[1,2,3]` and `[4,5,6]` manually.
// 32. Merge `[1,2]` and `[3,4]` using `concat`.
// 33. Copy `[5,6,7,8]` into a new array using a loop.
// 34. Copy `[5,6,7,8]` using the spread operator.
// 35. Slice `[10,20,30,40,50]` from index 1 to 3.
// 36. Splice `[1,2,3,4,5]` to remove the third element.
// 37. Insert `99` at index 2 in `[10,20,30,40]`.
// 38. Replace element at index 1 in `[5,6,7,8]` with `100`.
// 39. Flatten `[1,[2,3],[4,[5]]]` into `[1,2,3,4,5]`.
// 40. Remove duplicates from `[1,2,2,3,4,4,5]`.



// Level 5: Mixed Challenges (10 Qs)

// 41. Reverse `[1,2,3,4,5]` manually.
// 42. Reverse `[1,2,3,4,5]` using `reverse()`.
// 43. Find the average of `[10,20,30,40,50]`.
// 44. Find the second largest number in `[10,50,20,40,30]`.
// 45. Find the second smallest number in `[10,50,20,40,30]`.
// 46. Rotate `[1,2,3,4,5]` → `[5,1,2,3,4]`.
// 47. Rotate `[1,2,3,4,5]` → `[3,4,5,1,2]`.
// 48. Find common elements of `[1,2,3,4]` and `[3,4,5,6]`.
// 49. Find elements present in `[1,2,3,4]` but not in `[3,4,5,6]`.
// 50. Convert `[10,20,30]` into an object like `{0:10,1:20,2:30}`.

 


