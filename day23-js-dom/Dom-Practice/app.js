// select by ID

let title = document.getElementById("title");
console.log(title);

// select by class

let paras= document.querySelectorAll(".para");
console.log(paras);


// select by tag
let button = document.getElementsByTagName("button");
console.log(button);


// Inspect element 

console.dir(title);
console.dir(paras);
console.dir(button);

// Mini-Projects - Highlight paragraphs
let paragraphs = document.querySelectorAll(".para");
for(let p of paras){
  p.style.color ="blue";
}

// change inner text

