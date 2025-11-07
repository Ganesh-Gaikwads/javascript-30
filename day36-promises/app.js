
/*
const getData = new Promise((resolve, reject)=>{
  const Data = false;

  setTimeout(() => {
    if(Data){
      resolve("successfull")
    } else{
      reject("failed")
    }
  }, 3000);

})


getData.then(result=> console.log(result))
.catch(error=>console.error(error))
.finally(()=>console.log("operation successfull"));



// learning about Promises how they works and why should use promises


function SaveDB(data){
  return new Promise ((resolve, reject)=>{
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>5){
      resolve("data fetched successfully")
    } else{
      reject("weak connection");
    }
  })
}


//  let request = SaveDB("Ganesh Gaikwad");

//  request.then(()=>{
//   console.log("Resolve: Data Save Successfully");
//   console.log(request);
//  })
//  .catch(()=>{
//   console.log("reject: Weak Connection");
//   console.log(request);
//  })
 


// Promise chaining 

SaveDB("Ganesh")
.then(( result)=>{
  console.log("Data 1 Saved",result);
  return SaveDB("Gautam");
})
.then(( result)=>{
    console.log("Data 2 saved", result);
    return SaveDB("Ishan")
})
.then(( result)=>{
  console.log("data 3 saved",result);
})

.catch((error)=>{
  console.log("Promise rejected:",error);
})



//Async function => which return Promises ----->>>>> async and  await keyword


async function Greet(){
  //throw "random error";    // result rejected  throw an error
   return "hello";        // return result as hello ==> fullfilled
}


Greet().then((result)=>{
  console.log("resolved", result);
  return "mahabharat"
}) 
.catch((err)=>{
  console.log("rejected",err);
})





// await keyword

function Message(){
 return new Promise((resolve,reject)=>{
    setTimeout(() => {
      let num = Math.floor(Math.random()*10)+1;
     console.log(num);
     resolve();
    }, 1000);
  })
}
  
  

 async function demo(){
 await Message();
  await Message();
  await Message();
  await Message();
 await Message();
 await Message();
 await Message();
 await Message();
 }

 demo();
  
*/


// Hamdling Rejections
 


