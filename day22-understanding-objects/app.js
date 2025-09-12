// Creating Object


let studentInfo = {
    name :"Piyush",
    age:16,
    subjects:["Math","Physics","Eng","Chemistry"],
    marks:98.5,
}

console.log(studentInfo);


let car = new Object({
    brand:"Tesla",
    model:"X"
});


// Accessing Properties 
// 1. Dot Notation 

console.log(studentInfo.name);
console.log(studentInfo.subjects[2]);
console.log(car.brand);

// 2. Bracket Notation
console.log(studentInfo["subjects"]);
console.log(studentInfo["marks"]);
console.log(studentInfo["age"]);

// Add/Update/Delet

studentInfo.city = "Nashik"; // add
studentInfo.age =15;         // Update
console.log(studentInfo);

delete studentInfo.age;     // deleted stundentInfo age property. 
console.log(studentInfo);




car.owner="joen doe";        // add
car.model ="Z";              // Update
console.log(car);

delete car.owner;

console.log(car);            // deleted owner property.



// Iteration Object - used (for..in loop);

// for..in
for(let key in studentInfo){
    console.log(key, studentInfo[key]  );
}

// for second object car 

for(let key in car){
    console.log(key, car[key]);
}


// Object Methods
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

console.log(Object.keys(studentInfo));
console.log(Object.values(studentInfo));
console.log(Object.entries(studentInfo));


// Methods in Object => It defines the behaviour or actions that an object can perform or that can be performed on an object
// or we can say function that performed in object

let calculator = {
    add: function(a,b){
        return a+b;
    },

    sub:function(a,b){
        return a-b;
    },
    
    mul:function(a,b){
        return a*b;
    }
}

console.log(calculator.add(4,6));
console.log(calculator.mul(4,4));
console.log(calculator.sub(10, 5));



// Object- Level-1

// 1. Create an object student with properties: name, age, grade. Print all values.

let student ={
    name:"Vikas",
    age:21,
    grade:"A",    
};

console.log(student);           // print object
console.log(student.name);      // vikas
console.log(student.age);       // 21
console.log(student.grade);     // A
console.log(Object.values(student)); // print all values 
console.log(Object.keys(student));  // print all key 

// 2.  Add a new property city to student.
 
student.city="Pune";
console.log(student);

// 3. Update grade to "A+".

student.grade ="A+";
console.log(student);

// 4. Delete the age property.
delete student.age;
console.log(student);

// 5.Loop through the object and print all keys and values.

for(let keys in student){
    console.log(keys, student[keys]);
}


// Object-Level 2 => Basics + Nested

// 1. Create an object car with properties: brand, model, year. Print all values.

let Car = {
    brand : "Mahindra",
    model:"XUV",
    year:2020,
}

console.log(Object.values(Car));

// 2. Add a nested object owner with properties name & age inside car. Print owner’s name.

Car.owner={ name:"Vishal", age:43 };
console.log(Car.owner.name);

// 3. Update the car’s year to 2025.

Car.year=2025;
console.log(Car);

// 4. Delete the model property from car.
delete Car.model;
console.log(Car);

// Object Methods

// 5. Create an object calculator with methods add, sub, mul, div. Call each method.

let Calc = {
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
    div:function(a,b){
        return a/b;
    }

} 
console.log(Calc.add(12,5));
console.log(Calc.sub(12,5));
console.log(Calc.mul(12,5));
console.log(Calc.div(40,4));


// 6.Add a method greet to an object person that prints:"Hello, my name is <name>" (use this.name).

let obj = {
    name:"Ganesh",
    age:24,
    greet:function(name){
        return `Hello my name is: ${this.name}`
    }
}

 console.log(obj.greet());

 // Iteration + Object Utilities

 // 7. Use for...in loop to print all keys and values of car.
 for(let key in Car){
    console.log(key,Car[key]);
 }

 // 8.Use Object.keys() to print all keys of car.
 console.log(Object.keys(Car));

 // 9. Use Object.values() to print all values of car.
 console.log(Object.values(Car));

 // 10. se Object.entries() to print both keys and values of car as an array of pairs.
 console.log(Object.entries(Car));


 // Level-3 ==>  Objects + Arrays Practice Drill 
 
 // 1. Array of Objects -You have multiple students with name, age, and marks.
 let students = [
            { name:"Ganesh", age:25, marks:90},
            { name:"Ravi", age:22, marks:87},
            { name:"Sunil", age:15, marks:78}
 ];

 // Drill-|

      // 1.  Print all student names using a for- loop.

      for(let i=0; i<students.length; i++){
        console.log(students[i].name);
      } 

      // using for.. loop
      for(let stdnames of students){
        console.log(stdnames.name);
      }
    

    // Using forEach()
    students.forEach((students)=>console.log(students.name));


 
