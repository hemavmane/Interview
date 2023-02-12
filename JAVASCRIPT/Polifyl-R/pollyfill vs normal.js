
////////////////////////////////////// INBUILT FOREACH ////////////////////////////////

// let arr = [5,4,6,7,8]

// arr.forEach((ele)=>{
//   console.log(ele,'inbuilt foreEach')
// })

////////////////////////////////////CUSTOM FOREACH//////////////////////////

// Array.prototype.myForeachMethod = function(cb){
//           for(let i =0; i<this.length; i++){
//                cb(this[i])
//           }
// }




// arr.myForeachMethod((ele)=>console.log(ele,'my foreach'))


////////////////////////////////////FILTER//////////////////////////
// let arr = [4,3,5,2,6]
// arr.filter((x)=>{
//     console.log(x%2==0 ? "even" : "odd")
// })

// ////////////////////////////////////CUSTOM FILTER//////////////////////////



// Array.prototype.Myfilter = function(cb){
//   let newArray = []
//          for(let i =0; i<this.length; i++){
//            if(cb(this[i])){
//              newArray.push(this[i])
//            }
//          }
//          return newArray
// }

// arr.Myfilter((y)=>{
//      console.log(y%2==0 ? "even" :"odd","my custom filter") 
// })

//////////////////////////////////// INBUILT MAP//////////////////////////

// let arr = [4,3,5,2,60]

// let data =arr.map((ele)=>{
//   return ele<20 
// })

// console.log(data)
////////////////////////////////////CUSTOM MAP//////////////////////////

// Array.prototype.myMap =function(cb){
//     let newArray = []
//     for(let i=0; i<this.length; i++){
//                 newArray.push(cb(this[i]))
//     }
//     return newArray
//   }
  
//   let map =arr.myMap((ele)=>{
//   return ele*2
//   })
  
//   console.log(map)
  

////////////////////////////////////// INBUILT REDUCE ///////////////////////////
// let arr = [4,4,65,3,6,7]


// let reducedata =arr.reduce((accumulator,current)=>{
//   return  accumulator + current
// })
// console.log(reducedata)

////////////////////////////////////CUSTOM REDUCE//////////////////////////
// Array.prototype.Myreduce = function(cb,inititalValue){
        
//     let acc = inititalValue
//     for(let i=0; i<this.length; i++){
//          acc  = acc ? cb(acc,this[i]):this[i] 
//     }
//     return acc
// }


// let data = arr.Myreduce((acc,current)=>{
//    return acc + current + 0 
// })


// console.log(data)


////////////////////////////////////// INBUILT SORT ///////////////////////////

////////////////////////////////////CUSTOM SORT/////////////////////////




////////////////////////////////////// INBUILT BIND ///////////////////////////

////////////////////////////////////CUSTOM BIND//////////////////////////



////////////////////////////////////// INBUILT FIND ///////////////////////////

////////////////////////////////////CUSTOM FOIND//////////////////////////





