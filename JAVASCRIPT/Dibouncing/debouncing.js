// Debouncing in JavaScript is a practice used to improve browser performance
// it limits the rate at which a function gets invoked.
// Debouncing

let debounced=document.getElementById("debounce")


let count=0;
const getdata=()=>{
    // console.log("fetch" ,count++)
   debounced.innerText=count
   count++
}




function getapi(cl,t=200) {
    let timer;
    return function  (...args) {
   if(timer) clearTimeout(timer);
     timer=   setTimeout(() => {
             cl(...args);
        }, t);
      }
}

const debouncingFunction = getapi(getdata);











