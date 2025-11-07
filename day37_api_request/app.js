let url = "https://catfact.ninja/fact";

async function getFacts() {
 try{
   let res = await fetch(url);
  let data = await res.json();
  console.log(data.fact);

  let res2 = await fetch(url);
  let data2= await res2.json();
  console.log(data2.fact);
 } 
 catch(err){
  console.log("error-",err);
 }
}


























/*

// using fetch 

fetch(url)
.then((res)=>{
   
  return res.json();
})
.then((data)=>{
  console.log("data1:v",data.fact);
  return fetch(url);
})
.then((res)=>{
  return res.json();
})
.then((data2)=>{
  console.log("data2 :",data2.fact);
})
.catch((err)=>{
  console.log("ERROR:",err);
})

*/


