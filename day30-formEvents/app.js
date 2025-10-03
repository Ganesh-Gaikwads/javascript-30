 let form = document.querySelector('form');
 
 form.addEventListener('submit', function(event){
   event.preventDefault();                             // method to prevent default events like page redirect 
   console.log("form submitted");
 })
 




 // Etracting Form Data 

 form.addEventListener("submit", function(event){
  event.preventDefault();
 

  // let user = document.querySelector("#user")  ;
  // let pass = document.querySelector("#pass");
  
  // other way to access html elements



  console.dir(form);

  let user = this.elements[0];   // . this is  represent form object here  => 
  let pass = this.elements[1];    // form.element[0];
 


  console.log(user.value);
  console.log(pass.value);

  alert(` hi ${user.value}, your password is set to ${pass.value}`)


 })


 // More Events =>   
//  1. change Event =>   The change event occures when the value of an element has been changed (only works on <input>, <testarea>, <select > elements);

// 2. Input Event => The input Event fires whe the value of an <input>, <testarea>, <select > elements has been changed.




// Text Editor

let text = document.querySelector(".text")
let textline = document.querySelector("p")

text.addEventListener('input', function(event){
  event.preventDefault();
   console.log(text.value);
   textline.innerText = text.value;

})

