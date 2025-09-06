
// ====== this keyword in JS========
// "this" refer's to an object that is executing the current piece of code.


const student = {
    name : "ganesh",
    age:25,
    eng:89,
    math:98,
    phy:90,
    getAvg(){ let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
        //console.log(avg);

    }
 } 
//console.log(this);


//=========== try and catch statement ============ 



console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
// let a =21;
try{
    console.log(a);
} catch{
    console.log(" variable dosen't exits");
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
console.log("hello2");