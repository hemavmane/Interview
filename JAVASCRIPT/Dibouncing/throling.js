let thrott=document.getElementById("throt")
let count=0;
const getdata=()=>{
    // console.log("fetch" ,count++)
    thrott.innerText=count
    
}

function getapi(cb,d=1000){
  let previous=0;
  return (...args)=>{
    let now =new Date().getTime()
    if(now-previous>d){
      previous=now
      return cb(...args)
    }
  }
}

const throttleFunction = getapi(getdata);










