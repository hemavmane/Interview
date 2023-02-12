// MEMOIZATION// 
// it will save the time of call like in line 4 i declaredd one function
// and passed this function in memoized function  as a callback function
// in line 15 and i declared one varible cache which will store called data and
// i return closure in line 19 it have one condtion if storedata already called means present in cache
// then print same storedata from cache else print wt argument i passed in callback function
// print that 
let sum =0;
function calcu(n){
for(let i =0; i<n; i++){
   
       sum += i
}
return sum;
}


function Memoization(callbackfun){

          let cache = {}
          return function(...argument){
            // here rest operator  recieve parameter and store push in cache
            let storedata = argument[0]
            if(storedata in cache){
                console.log(cache,'cache')
               return  cache[storedata]
            }else{
                console.log('first')
               let results = callbackfun(storedata)
               cache[storedata] = results
               return results
            }
          }
}
console.time()
let memoizedResult = Memoization(calcu)

console.log(memoizedResult(4))
console.log(memoizedResult(4))
console.log(memoizedResult(5))
console.log(memoizedResult(5))
console.timeEnd()