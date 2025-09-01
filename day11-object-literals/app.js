//exapmple 1

 const student ={
    name :"Ganesh",
    age : 24,
    marks: 100,
    city:"mumbai"
 };

 

//example 2

let delhi = {
   latitude : "28.7041N",
   longitude: "77.1025E"
};

// example 3

const item = {
   price: 100.99,
   discount: 50,
   color:["Red","pink"]
};


// Thread/Twitter Post- create an object literal for the properties of thread/twitter post which includes 

const thread ={
   userName : "@_gaikwads_",
   content: "Travel Blogs",
   likes:200,
   reposts:20,
   tags:["@apnaCollege","@abbyViral"]
};
 

// JS Automatically converts object keys to strings even if we made the number as a key, the number will be converted to string.



//==================================Object of((nested object) Objects(storing information of multiple students) =================================
 
const classInfo ={
   aman:{
      grade:"A+",
      city:"Delhi"
   },
   shraddha:{
      grade:"A",
      city:"Pune"
   }
 };


 //Array Objects
  const Product =[

      {  
         name:"Santoor",
         price :"10 RS",
         type:"soap"
      },
      {
         name:"Dove",
         price: "2RS",
         type:"Shampoo"
      },
      {
        name : "Navratna",
        price:"60RS",
        type:"Hair Oil" 
      }
       

  ];


  // Math Object- Random Integer
  let num = Math.random();
  num = num*10;
  num=Math.floor(num);
   console.log(num+1);



   // Practice Question - Generate a random number between 1 to 100
   let number = Math.floor(Math.random()*100)+1;
   console.log(number);

   //Generate a random number between 1 to 5

   let randomNum = Math.floor(Math.random()*5)+1;
  // let randomNum = Math.floor(Math.random()*5)+20;
   console.log(randomNum);



   //--------------------------------------JS part-5 Practice Problems ------------------------------------

   // Qs.1 Create a program that generates a random number representing a diceroll. [the number should be betweeb 1 and 6]

   console.log("Dice Roll Program");

   let diceRoll = Math.floor(Math.random()*6)+1;
   console.log(diceRoll);


   // Qs. 2 Create an object representing a car that store the following properties for the car: name, model , color , Print the car's Name

   const cars = {
        name : "Bolero",
        model:2014,
        color:"white"
   } 
   console.log(cars.name);

   // Qs.3 Create an object Person with their name,age and city.edit the city"s original value to change it to "New York", Add new property country and set it to the united state

   let PersonInfo = {
      name: "jon doe",
      age :34,
      city:"Mexico"
   } ;

   console.log(PersonInfo);

   PersonInfo.city="New York";
   PersonInfo.country ="United States";

   console.log(PersonInfo);
