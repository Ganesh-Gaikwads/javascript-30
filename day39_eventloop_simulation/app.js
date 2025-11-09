


//Example-1
console.log("A"); // run first sync
setTimeout(() => {
  console.log("B"); // run after sync and microtask queue
}, 0);
console.log("c"); // run second sync

// Example-2

console.log("1"); // run first sync
Promise.resolve().then(() => console.log("2")); // run after all sync
console.log("3"); // second sync

// Example-3
console.log("Start"); // sync execute first
setTimeout(() => {
  console.log("timeout"), 0;
}); // run after microtask run

Promise.resolve().then(() => console.log("promise resolve then")); // its promise goes to microtask so it run before macrotask
console.log("end"); // second

//Example-4

Promise.resolve()
  .then(() => {
    console.log("then1"); // second then promise resove
    return Promise.resolve();
  })
  .then(() => {
    console.log("then2"); // then third
  });
console.log("sync"); // sync first run

// Example-5
setTimeout(() => {
  console.log("t1"); // after sync and microtask  run this macrotask t1 and t2
}, 0);
setTimeout(() => console.log("t2"), 0);
Promise.resolve().then(() => console.log("P1")); // after sync both microtask p1 and p2
Promise.resolve().then(() => console.log("P2"));
console.log("sync"); // first sync

// Example-6
console.log("s"); // first S run
setTimeout(() => {
  console.log("T1"); // fourth this line
  Promise.resolve().then(() => console.log("P in T")); // then last will this
}, 0);

Promise.resolve().then(() => console.log("P1")); // third this microtask run
console.log("E"); //  second E sync

// Example 7

console.log("a"); // 1.a sync function
Promise.resolve().then(() => console.log("b")); // 3 . after sync function all microtask q execute like b,d,e
setTimeout(() => console.log("c"), 0); // after sync and microtask queue last execute macrotask
Promise.resolve().then(() => {
  console.log("d");
  return Promise.resolve().then(() => console.log("e"));
});

console.log("f"); //2. f sync function

// example-8

let p = new Promise((res, rej) => {
  console.log("executor");
  res("ok");
});

p.then((v) => console.log("then:", v));
console.log("after");

// executor, after, then:ok

// example-9
console.log("X");
setTimeout(() => console.log("Y"), 0);
Promise.resolve().then(() => setTimeout(() => console.log("Z"), 0));
console.log("W");

// x,w, y,z

// example-10
console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve().then(() => console.log("3"));
}, 0);

Promise.resolve().then(() => {
  console.log("4");
  setTimeout(() => console.log("5"), 0);
});

console.log("6");

// ans- 1,6,4.2.3.5

let x = new Promise((res,rej)=>{
 setTimeout(() => {
   res("done")
   
 }, 1000);

  
})


x.then((msg) => {
  console.log("Task1:", msg);
  return "d";
}).then((newMsg) => {
  console.log("Task2", newMsg);
  
});




let Mini=  new Promise((res, rej)=>{
 setTimeout(() => {
  res("Boss")
  
 }, 2000);
})


Mini
.then((msg)=>{console.log("task1 done", msg)
  return " boss2";
})
.then((newBoss)=>{
  console.log("task2 done",newBoss);
  return Promise.reject("Error")
})
.catch((err)=>{
  console.error("there is error",err);
})
.finally(()=>console.log("Promise complete"));
