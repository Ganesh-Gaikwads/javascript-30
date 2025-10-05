// Event Listener in JS
/*
// 1. Inline Event Listener
// Onclick use or defined in html tag

// onclick Event first way not most used or efficient
function sayHi() {
  console.log("Hello");
}

let cardCheck = () => {
  console.log("user clicked on card");
};

//  // another way to events its also not efficient

let h1 = document.querySelector("h1");

 function clickHeading(){
  console.log("user clicked on heading");
 }

 h1.onclick = clickHeading;

 let card = document.querySelector('.card');

 function clickCard(){
  console.log("user clicked on card");
 }

 card.onclick=clickCard;

 // addEventlistener is one of the best way use events

 h1.addEventListener('click',()=>{
  console.log("user click using addeventlister");
 })

 card.addEventListener('click',sayHi)

console.log(h1.innerText);

function call() {
  console.log("yes its works");
}

// h1.onclick=call;

h1.addEventListener("click", call);
*/


// card ducplicate

let card = document.querySelector('.card');
let div = document.querySelector(".container");
let count = 0;
card.onclick = ( )=>console.log("clicled");


card.addEventListener('click', function(){
  let newDiv = document.createElement('div');
  newDiv.classList.add('card')
  div.appendChild(newDiv);

 newDiv.innerText = ++count;
})