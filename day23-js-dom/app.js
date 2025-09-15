let smallImages = document.getElementsByClassName("oldImg");;

for(let i=0; i<smallImages.length; i++){
  smallImages[i].src ="assets/spiderman_img.png" ;
  console.log(`value of image no ${i} is changed`);
}


// selecting paragraph using getElementbyTagName





// Query selector => single element return first object matched 

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));


console.dir(document.querySelector("div a"));


// Query selector all - return all 
console.dir(document.querySelectorAll("h1"));
console.dir(document.querySelectorAll("p"))





// Manupulating element