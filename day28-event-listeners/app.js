// .addEventlistener 


let btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
   btn.classList.add('button');
 
   console.log("Button clicked");
  setTimeout(()=>btn.classList.remove('button'),2000)
});



// Learning .this in events how it works

const buttons =  document.querySelectorAll(".btn")   
 


buttons.forEach( function(button){                    
  button.addEventListener('click',function(){        
    console.log("clicked", this.innerText);
  });

}

)









document
  .querySelectorAll(".btn")
  .forEach((btn) =>                                                              // when we access elements through queryselectorAll and apply eventlistener it won't work. 
    btn.addEventListener("click", () => console.log("Clicked!", btn.innerText))    // bcoz queryselectorAll give node list so we have use for echa method and apply loop trough each node
  );


  // keyboard events

  const search = document.querySelector('.search-bar')
  
  search.addEventListener( "key",function(e){
      console.log(event.key);
  })

  







