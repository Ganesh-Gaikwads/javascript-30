let btn = document.querySelector('button');
/*
// Mouse Events 

btn.addEventListener('click',function(event){
  console.log(event);
  console.log("Button clicked");
})

btn.addEventListener('dblclick',function(event){
  console.log(event);
  console.log("double clicked");
})

*/

// Keyboard Events => create input 

let inp = document.querySelector('input');
/*

// keydown => key
inp.addEventListener('keydown', function(event){
  console.log(event.key);
  console.log(event.code);
  console.log("key was pressed");

})

// key => keyup

inp.addEventListener('keyup', function(){
  console.log("key was released");
})


*/
 inp.addEventListener('keydown', function(event){
  //console.log(event.code);
  if(event.code === "ArrowUp"){                  // KeyU used also
    console.log("character move forward");
  } else if( event.code ==="ArrowDown"){            // KeyD
    console.log("Character move backword");
  } else if( event.code === "ArrowLeft"){              // KeyL
    console.log("character move left side");
  } else if(event.code==="ArrowRight"){                // KeyR
    console.log("character move right side");
  } else{
    console.log("please enter valid keys");
  }
 })