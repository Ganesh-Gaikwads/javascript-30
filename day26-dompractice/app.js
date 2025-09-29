//  1. Change the text of <h1 id="title"> to "DOM Mastery in Progress".
// first way
let title = document.getElementById('title');
title.innerText ="DOM Mastery in Progress"

// second way:
// document.querySelector('h1').innerText="DOM Mastery in Progress"

// 2.Change the color of <p class="text"> to "blue".
 document.querySelector('p').style.color="Blue";
 
// document.getElementsByClassName('text').style.color="red"


// 3. Use .innerHTML to replace <p> with <p><b>Bold and Blue!</b></p>.

document.querySelector('p').innerHTML="<p><b>Bold and Blue</b><?p>"

// 4. Add a new attribute id="main" to <ul> using setAttribute.
document.querySelector('ul').setAttribute('id','main');

// 5. Add a new CSS class "highlight" to <h1> using .classList.add.
let h1 = document.querySelector('h1');
h1.classList.add('highlight')