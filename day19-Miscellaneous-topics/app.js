// Miscellaneous Topics

// 1. Arrow Functions
const sum = (a,b)=>{
   return a+b;
    //console.log(a+b);
}  
sum(12,8);

// eg.2 
const cube = (n)=>{    // if have an only single arg..1 then if ther ( ) dont have, its an valid statement 
    return n*n*n;
} ; 
cube(2);


const cub = n=>(n*n*n);

// eg.2 
const power =(a,b) =>{
    return a**b;
    //console.log(a**b);
} 
power(5,6)

// Implicit Return -- 
const mul = (a,b)=>(a*b); // arow function



//Set Timeout=> in build function of window object,like(math.object);

console.log("Hi there .");

setTimeout( ()=> {
  console.log("Gaikwads empire");

}  ,2000 )

console.log("Welcome to ");

// setInterval

let id = setInterval( ()=>{
console.log("hey ganesh");
},2000)

console.log(id);


let id1 = setInterval( ()=>{
console.log("hey gautam");
},2000)

console.log(id1);


// ===== this with arrow functions

const student = {
    name : "gaurav",
    marks: 98,
    pop:this,       // gloable scope
    getName: function(){
        return this.name;
    }
} 