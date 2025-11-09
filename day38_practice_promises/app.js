


function DoHomework(subject){
  return new Promise((reslove, reject)=>{
    console.log(`starting my ${subject} homework....`);
    setTimeout(() => {
      const done = Math.random()>0.3;
      if(done){
        reslove(`finished ${subject} homework!`);
      }  
      else{
        reject(`Couldn't complete ${subject} homework...`)
      }
      
    }, 2000);
  })
}



DoHomework("javascript")
.then((msg)=>{
  console.log(msg);
})
.catch((err)=>{
  console.error(err)
})
.finally(()=>console.log("homework session complete"));



// Q1: Basic Resolve

function resPromise(){
  return new Promise((resolve)=>{
   setTimeout(() => {
     resolve("promiese resolve !")
   }, 2000);
  })
}

resPromise()
.then((msg)=>{
  console.log(msg);
})



// Q2: Basic Reject

function rejectPromise(){
  return new Promise((reject)=>{
    setTimeout(() => {
      reject("Something went wrong");
    }, 1500);
  })
}

rejectPromise()
.catch((err)=>{
  console.log("something went worg",err);
})  





//  //Q3: Random Success or Failure

 function RandomNumber() {
   let num = Math.floor(Math.random() * 10) + 1;
   return new Promise((resolve, reject) => {
     if (num > 5) {
       resolve("success: number was high!");
     } else {
       reject("Fail: number was low!");
     }
   });
 }

RandomNumber()
        .then((res)=>{
          console.log(res);
        })
        .catch((err)=>{
          console.error("promise rejected");
        })
        .finally(()=>{
          console.log("operation successfull");
        })




    