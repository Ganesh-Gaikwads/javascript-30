const input = document.querySelector('#user-name');
const para = document.querySelector('p');
const btn = document.querySelector('button');
const form = document.querySelector('form')
 
// input event

input.addEventListener('input',(e)=>{
  console.log("Input event fired");
  console.log(e.target.value);
})


let inputValue ;



input.addEventListener('input',(e)=>{
  console.log(e.target.value);
  inputValue = e.target.value;                   // store value in variable
  para.innerText = e.target.value;                //  gave input element value to para
})



// Change Evnet  => fired when user   change input and reposition or click outside

input.addEventListener('change',(e)=>{
  console.log(e.target.value);
  console.log(para.innerText = e.target.value);
  console.log("change event fired");
})


// Focus Event => when we clicked in input it called focus event

  input.addEventListener('focus',(e)=>{
    console.log(e.target.value);                   
    console.log("focus event fire");
  })


  // Blur event  => after triggered focus and when we click out side input
  
  input.addEventListener('blur',(e)=>{
    console.log(e.target.value);                   
    console.log("blur event fire");
    para.innerText = e.target.value;
  })


  // Form Event => submit event on button => when we click on button it reload

  form.addEventListener('submit',(e)=>{
     e.preventDefault();   
                   // use to stop or prevent form default behaviour
    console.log("submit executed");
    
  })

 


