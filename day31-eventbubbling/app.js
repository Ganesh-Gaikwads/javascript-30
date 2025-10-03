// Event Bubbling

let div = document.querySelector('div');
let ul = document.querySelector('ul')
let li = document.querySelectorAll('li')


div.addEventListener('click', function(event){
  event.stopPropagation();                              //   event.stopPropagation(); using this method we can stop event bubbling;
  console.log("div was clicked");

});


ul.addEventListener('click', function(event){
    event.stopPropagation();
  console.log("ul was clicked");
})


for(let lis of li){ 
  
  lis.addEventListener('click', function(event){
      event.stopPropagation();
  console.log("li was clicked");
})
}






