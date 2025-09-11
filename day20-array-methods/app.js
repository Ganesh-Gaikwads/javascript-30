// Array Methods

// 1.forEach

let arr =[1,2,3,4,5];

function print (el){
    console.log(el);
} 
arr.forEach(print)
 
// Or 

console.log("wrote fuction inside fo method");

arr.forEach(function (el){
    console.log(el);
})


// using arrow function

console.log("used Arrow function");
arr.forEach( (el)=>{
    console.log(el);
})


console.log("helowww");



// .forEach() we can use for object also;

let student  =[ {
    name:"ganesh",
    marks:100
},
{
    name: "Gautam",
    marks:99
},
{
    name:"Piyush",
    marks:98
},
];


// using normal fucction
 function person (info){
    console.log(info.name);
 }
student.forEach(person);


// using for object/ arrow function write
student.forEach((student)=>{
    console.log(student.marks);
})

// used map for to get student gpa 
let gpa = student.map((el)=>{
    return el.marks/10;
}) 
console.log(gpa);
``



// Map 

let num = [1,2,3,4,5];
let thrice = num.map((el)=>{
    return el*3;
})
 console.log(thrice);


 // Filter 

  let nums =[1,2,4,3,5,17,6,8,7,9,12];
  let result = nums.filter((el)=>(el%2===0)); // find even numbers
  console.log(result);

  // find odd number
  let odd=nums.filter(n=>(n%2!==0));
  console.log(odd);

  // find less than 8

  let Less5 = nums.filter((el)=>{
    return el<5;
  }) 
  console.log(Less5);


  // greater than 10

  let greter = nums.filter((el)=>{
    return el>10;
  });
  console.log(greter);


  // Every -> Returns true if every element of array gives true for some function . else return false

  let array = [2,4,6,5];
  console.log(array.every((el)=>(el%2===0)));

  // some -> Return true if some elements of array give true for function , else return false 
  console.log(array.some(n=>(n%2!==0)));

  // Note- every and some work as same 





  // Reduce -> Reduce the array to a single  value
  let array1 = [1,2,3,4,5,6,7,8,9,10]
  console.log(array1.reduce((res, el)=>(res+el)));


  // find maximum in array

  let max = array1.reduce((max , el)=>{
    if(el>max){
        return el;
    } else{
        return max;
    }
  })

  console.log(max);


  // check if all number in our array are multiple of 10 or not.
 let ar = [10,20,30,40,50];
 let multiple = ar.every((el)=> (el%10===0));
 console.log(multiple);




  // create a function to find the min number in an array.

  function getMin(ar){
  let min = ar.reduce((min, el)=>{
    if(min<el){
        return min
    } else{
        return el;
    }
  })
  return min;
} 

let nub = [12,43,5,3,5,322,4,5]
 getMin(nub);



// Default Parameter => Giving a default value to the argumetns

function sum(a, b=8){
   // return a+b;
   console.log(a+b);
} 
 sum(5,3)


 function greet (name = "Guest"){
    return `hello ${name}`
 } 
greet("ganesh")


// Spread => Expands an iterable into multiple times
let arrr = [12,34,54,65,65,32,62,73]
let str = "Apna college";
console.log(...str);
console.log(..."i love to do code");
console.log(Math.min(...arrr));
console.log(Math.max(...arrr));

let newStr = [..."ganesh" ];
console.log(newStr);



//spread with array literals
let ar1 = [12,34,54,65,65,32,62,73];
let newArr=[...ar1];
console.log(ar1);
console.log(newArr);


// spread wity object literals

let data={
    email : "ironman@gmail.com",
    passward:"qwert",
} 

console.log(data);

let DataCopy = {...data, id:123, Country:"india"}
console.log(DataCopy);


let digit = [1,2,3,4,5,6];
let obj1={...digit};
console.log(obj1);



// Rest => Allows a function fo take an indefinite number of arguments and bundle them in an array.

function sum(...args){
    // arguments
    for(let i=0; i<args.length; i++){
        console.log("you gave args:", args[i]);
    }

} 
sum(8,3,5,6,4,7,8,5);


function min(a,b,c,d){
    console.log(arguments);
} 
min()


// sum of argument
function sum(...args) {
return args.reduce((res,el)=> res +el);
} 


// find min value of args

function minimum(...args){
    return  args.reduce((min, el)=>{
        if(el<min){
            return el;
        } else{
            return min;
        }
    });

}

minimum(1,2,3,4)




// Destructuring on Arrays => Storing values of array into multiple variables

 let names=["tony","bruce", "peter", "steve","Natasha","wonda"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerUp = names[2];

let[winner,runnerup, secondRunnerup]=names;
console.log(winner);
console.log(runnerup);
console.log(secondRunnerup);

// but when we have multiple values like other "steve","Natasha","wonda"

let [first,second, ...others]=names;
console.log("winner",first);
console.log("runnerUp:",second);
console.log("paraticipants:",others);


// Destructuring on Object

const studentt ={
    name:"Piyush",
    class:9,
    subjects :["Marathi","Math","Science","English"],
    username :"Piyush@123",
    passward :"abcd",
    //city:"Pune"

} 

// normal method

// let username = studentt.username;
// let passward = studentt.passward;

//console.log(username, passward);

let { username:id, passward:pass,city:location1 ="Mumbai"}=studentt;
 console.log(id);
 console.log(pass);
 console.log(location1);
