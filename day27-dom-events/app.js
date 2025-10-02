let btn = document.querySelector('button')
let btns = document.querySelectorAll('button');
 
// to single button

// btn.onclick = function ( ){
//   alert('button clicked.')
// }

// second way: 

// function sayHi (){
//   console.log('hi')
// }

// btn.onclick = sayHi ;





// for all buttons

for(let btn of btns ){
  btn.onclick = sayHello;
  btn.onmouseenter =mouse;
}

 
function sayHello (){
  console.log(`Button is clicked.`)
};

function mouse (){
  console.log("mouse entered here.");
}