
// Arrays

// 1. Print elements with their index
let arr = [10,20,30];
for(let i=0; i<arr.length; i++){
   console.log(`${arr.indexOf(arr[i])}: ${arr[i]}`);
}

// 2. Sum of all numbers
let arr2 = [1,2,3];
let sum = 0;
for(let i=0; i<arr2.length; i++) sum+=arr2[i];
console.log(`sum of all number :${sum}`);

// 3. Max / Min value
let arr3 = [5, 1, 9, 2];
let max = arr3[0];
let min = arr3[0];
for (let i = 1; i < arr3.length; i++) {
  if (max < arr3[i]) max = arr3[i];
  if (min > arr3[i]) min = arr3[i];
}
console.log(`Max Value : ${max}`);
console.log(`Min value : ${min}`);

// 4. Count occurrences of X
let arr4 = [1,2,1,3,1];
let count = 0;
for(let i=0; i<arr4.length; i++){
    let x = 1;
    if(arr4[i]===x) count++;
} 
console.log(count);

// 5.Remove last / first element (manually)
let arr5 = [1,2,3];
let result=[];
for( let i=0; i<arr5.length; i++){
     if(i!==0 && i !==arr5.length-1) result.push(arr5[i]);

    
} 
console.log(result);

//Reverse array without .reverse() (you did this — revisit for mastery)

let reverseArr = [];
for(let i=arr5.length-1; i>=0; i--) reverseArr.push(arr5[i]);
console.log(reverseArr);

//