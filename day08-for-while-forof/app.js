console.log("Learning While loop today:")
let i= 1;
while(i<=5){
        console.log(i);
        i++;
    }

console.log("Backword");
let j=10;
while(j>=1){
    console.log(j);
    j--;
}


console.log("print 0 to 20");

let k= 0;
while(k<=20){
    console.log(k);
    k++
}


/*

// favorite movie Guessing game

console.log("Favorite movie guessing game :");

const favoriteMovie = "Lakshya";

let guessMovie = prompt("enter movie name here ?");

while((guessMovie!=favoriteMovie) &&(guessMovie!= "q") ){

    guessMovie = prompt("wrong guess. please try again")

} if(guessMovie===favoriteMovie){
    console.log("Congratulations you guess correct",guessMovie);
} else{
    console.log("you quit the game");
}




const favMovie = "Spider Man";
let guess = prompt("enter movie here.");

while ((guess != favMovie) && (guess!= "quit") ){
    
    guess= prompt(" Wrong guess.try again ");

} if(guess==favMovie){
    console.log("congratulations");
} else{
    console.log("you quit");
}

*/


// break keyword --> loop execution stop !

console.log("Break keyword");
let num = 1;

while(num<=5){
    if(num >=3){
        break;
    }
    console.log(num);
    num++;
}


// Loops in Arrays

console.log("Loops in arrays.");

let fruits = ["mango","apple","banana","litchi","orange"]
fruits.push("Pineapple");
for(let i=0; i<fruits.length; i++){
    console.log(i,fruits[i]);
}

// print backward arrays;

console.log("backward ");

for(let i=fruits.length-1; i>=0; i--){
    console.log(i,fruits[i]);
}


// Nested loops with Nested Arrays

let heroes = [["ironman","spiderman","thor"],["superman","wonder women","flash"]];
 console.log(heroes);
 for(let i=0; i<heroes.length; i++){
    console.log(i,heroes[i],heroes[i].length);
    for(let j=0; j<heroes.length; j++){
        console.log(`j=${j},${heroes[i][j]}}`);
    }

    
     
 }

 //for of loop
 console.log("for of loop implemented");
 for(fruit of fruits){
    console.log(fruit);
 }
 

 for(hero of heroes){
    console.log(hero);
 }

 for(char of "Ganesh"){
    console.log(char);
 }


 // Nested for of loop- used above array here (heroes )
 for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
 }