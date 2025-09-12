// Arrays - level 1 (Practice with manually)

// 1. Print the first and last element of [100, 200, 300, 400, 500].

let arr =  [100, 200, 300, 400, 500];
console.log("First Elemtn of the array:",arr[0]);
console.log("Last Element of the array :",arr[arr.length-1]);


// 2. Manually push two numbers into [1,2,3].

let arr1 = [1,2,3];
arr1[arr1.length] = 4;
arr1[arr1.length] = 5;
console.log(arr1);

// 3. Remove the last element from [10,20,30,40] manually.

let arr2 = [10,20,30,40];
arr2.length = arr2.length-1;
console.log("Removed last element of array:",arr2);


// 4. Find the sum of [2, 4, 6, 8, 10].

let arr3 = [2,4,6,8,10];
let sum = 0;
for(let i=0; i<arr3.length; i++){
 sum+=arr3[i]
}

console.log("sum of array:",sum);

// 5. Count how many odd numbers are in [11, 12, 13, 14, 15].

let arr4 =  [11, 12, 13, 14, 15];
let count =0;
for(let i=0; i<arr4.length; i++){
    if(arr4[i]%2!==0){
        count++;
    }
}
 console.log(count);

 // Array - Level 2 (Built-in Methods)

 // Map()

 // 1. Double every element in [1, 2, 3, 4, 5] using map().
 let arr5 =[1, 2, 3, 4, 5];
 let Double = arr5.map((n)=>n*2)
 console.log(Double);
 
 // 2. Convert an array of names ["ganesh", "rahul", "sita"] into uppercase using map().
 let arr6 =  ["ganesh", "rahul", "sita"];
 let uppercase = arr6.map((arr)=>arr.toUpperCase())
 console.log(uppercase);

// Filter();

 // 3. Filter only even numbers from [11, 20, 31, 42, 53, 64].
 let arr7 = [11, 20, 31, 42, 53, 64];
 let evenNum = arr7.filter((n)=>(n%2===0));
 console.log(evenNum);

 // 4. From ["apple", "banana", "kiwi", "grape"], filter out words with length > 5.
  
 let arr8 =  ["apple", "banana", "kiwi", "grape"];
 let length =  arr8.filter((str)=>str.length>5)
 console.log(length);

 // Reduce ( );

 // 5. Find the sum of [5, 10, 15, 20] using reduce().
 let arr9 = [5, 10, 15, 20];
 let sum1 = arr9.reduce((sum,el)=>sum+el);
 console.log(sum1);

 // 6. Find the maximum number in [12, 45, 23, 67, 34] using reduce().
 let arr10 = [12, 45, 23, 67, 34];
 let max = arr10.reduce((max, el)=>{
    if(el > max){
        return el;
    } else{
        return max;
    }
 });

 console.log("Largest Number in Array:",max);

 // sort( );

 // 7.Sort [40, 10, 100, 30, 20] in ascending order.
 let arr11 = [40, 10, 100, 30, 20];
 let sortArr = arr11.sort((a, b)=>a-b);
 console.log(sortArr);

 // 8. Sort ["zebra", "apple", "mango", "banana"] alphabetically.
 let arr12 = ["zebra", "apple", "mango", "banana"];
 let SortStr = arr12.sort( );
 console.log(SortStr);

 // Find( );
 
 // 9. Find the first number greater than 50 in [23, 45, 67, 89, 12].
 
 let arr13 = [23, 45, 67, 89, 12];
 let greaterNum = arr13.find((el)=>el>50);
 console.log(greaterNum);

 // FindIndexOf( );

 // 10. Find the index of "banana" in ["apple", "mango", "banana", "grape"].
 let arr14 = ["apple", "mango", "banana", "grape"];
 let banana = arr14.indexOf("banana");
 console.log(banana);
