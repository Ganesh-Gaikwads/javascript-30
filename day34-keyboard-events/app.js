const h1 = document.querySelector('h1');
// const input = document.querySelector('input')

// window.addEventListener('keypress',(e)=>{       // mostly used on window object
//   console.log("KeyPress event executed",e);
// })


// keyPress event

h1.addEventListener('keypress',(e)=>{
  // console.log("key:",e.key);
  // console.log("code:",e.code);

  //  console.log("key press event fired");
 
})



// keyUp event
h1.addEventListener('keyup',(e)=>{
 console.log("Keyup event fired");
 
})


//keyDown event

h1.addEventListener('keydown',(e)=>{
  console.log("keydown event fired");
})


