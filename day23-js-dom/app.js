// -----------------------------
// DOM MANIPULATION PRACTICE
// -----------------------------

// Selecting Elements (by ID)
console.log(document.getElementById("mainImg"));
let img = document.getElementById("mainImg");
console.log(img?.src);

console.log(document.getElementById("description"));

// Selecting Elements (by Class)
console.log(document.getElementsByClassName("oldImg"));
let imges = document.getElementsByClassName("oldImg");

for (let i = 0; i < imges.length; i++) {
  console.log(`Image no: ${i} accessed successfully.`);
}

// Selecting Elements (by Tag)
console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByTagName("span"));

// Query Selector (single)
console.log(document.querySelector("p"));
console.log(document.querySelector("#mainImg"));
console.log(document.querySelector(".oldImg"));

// Query Selector (multiple)
console.log(document.querySelectorAll("p"));
console.log(document.querySelectorAll("#mainImg"));
console.log(document.querySelectorAll(".oldImg"));
console.log(document.querySelector("div a"));
console.log(document.querySelectorAll("div a"));

// -----------------------------
// CHANGING CONTENT & STYLE
// -----------------------------

// Example: Changing inner text
let description = document.getElementById("description");
description.innerText = "Spider Man is super.";

// Example: Styling an image
img.style.border = "2px solid red";
img.style.width = "320px";

// Styling headings
let heading1 = document.querySelector("h1");
heading1.innerHTML = `<u>${heading1.innerText}</u>`;
heading1.style.color = "purple";
heading1.style.backgroundColor = "yellow";
heading1.style.fontFamily = "monospace";
heading1.style.fontStyle = "italic";

let heading2 = document.querySelector("h2");
heading2.innerHTML = `<i>${heading2.innerText}</i>`;
heading2.style.color = "red";

// -----------------------------
// ATTRIBUTES
// -----------------------------

let links = document.querySelector(".boxLink");

// Get attributes
console.log(links.getAttribute("class"));
console.log(links.getAttribute("id"));
console.log(img.getAttribute("id"));
console.log(img.getAttribute("class"));

// Set attributes
links.setAttribute("id", "blueLinks");
img.setAttribute("class", "images");
img.setAttribute("src", "assets/creation_2.jpeg");

// -----------------------------
// CLASSLIST
// -----------------------------

console.log(heading1.classList);
heading1.classList.add("title", "box");
heading1.classList.remove("box");
console.log(heading1.classList.contains("title"));

// Toggle class
heading1.classList.toggle("title");
heading1.classList.toggle("box");

// Example: Changing background color with toggle
let newBox = document.querySelector(".boxx");
newBox.classList.toggle("boxBGf");

// -----------------------------
// NAVIGATION
// -----------------------------

let element = document.querySelector("h4");
console.log(element.parentElement);
console.log(element.childElementCount);

let newEl = document.querySelector(".boxx");
console.log(newEl.parentElement);
console.log(newEl.children);
console.log(newEl.previousElementSibling);
console.log(newEl.nextElementSibling);

// -----------------------------
// ADDING ELEMENTS
// -----------------------------

// Add paragraph
let p = document.createElement("p");
p.innerText = "Hey I'm red";
p.classList.add("red");
document.body.append(p);

// Add h3
let h3 = document.createElement("h3");
h3.innerText = "I'm a Blue h3!";
h3.style.color = "blue";
document.body.append(h3);

// Add div with h1 + p
let div = document.createElement("div");
div.classList.add("khoka");

let divHeading = document.createElement("h1");
divHeading.innerText = "I'm in div";

let divParagraph = document.createElement("p");
divParagraph.innerText = "ME TOO!";

div.appendChild(divHeading);
div.appendChild(divParagraph);

document.body.appendChild(div);

// Add button example
let btn = document.createElement("button");
btn.innerText = "Click Me";
div.appendChild(btn);
