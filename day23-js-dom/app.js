document.all[8].innerText = "Peter Parker"
document.all[8].innerText = "Steve Jorge"
document.all[8].innerText = "Spider Man"    // Accessing element through object element  


// SELECTING ELEMENTS => getElementById => Return the Element as an object or null (if not found).
 
// syntax =>  document.getElementById( );

console.dir(document.getElementById("mainImg"));
let img = document.getElementById("mainImg");
 

console.log(img.src);
console.dir(document.getElementById("description"));



// ELECTING ELEMENTS => getElementByClassName => Return the element as an HTML collection or empty collection (if not found).

// syntax =>  document.getElementByClassName( );

console.dir(document.getElementsByClassName("oldImg"));
 let imges = document.getElementsByClassName("oldImg");
 
 for(let i=0; i<imges.length; i++){
  //imges[i].src = "assets/spiderman_img.png"
  console.log(`value of image no : ${i} is changed.`)
  
 }


 // ELECTING ELEMENTS => getElementByTagName => Return the element as an HTML collection or empty collection (if not found).
// syntax =>  document.getElementByTagName( );

console.dir(document.getElementsByTagName("p"));
// console.log(document.getElementsByTagName("p")[1].innerText = "GANESH GAIKWAD FUTURE CEO")
console.dir(document.getElementsByTagName("span"));






// Query Selectors  => Allows us to use any CSS  selector

console.log(document.querySelector('p'));
console.log(document.querySelector('#mainImg'));
console.log(document.querySelector('.oldImg'));


// queryselectorAll for access all element on html 

console.log(document.querySelectorAll('p'));
console.log(document.querySelectorAll('#mainImg'));
console.log(document.querySelectorAll('.oldImg'));

console.dir(document.querySelector('div a'));
console.dir(document.querySelectorAll('div a'));