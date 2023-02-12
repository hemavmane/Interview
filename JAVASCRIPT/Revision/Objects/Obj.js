// let object = {
//     name :"hema"
//     ,age :21
// }

// console.log(object.name)
// output hema

// let object = {
//     name :"hema"
//     ,age :21
// }
// delete object.name
// console.log(object.name)
// //output undefined

// let object = {
//     name :"hema"
//     ,age :21
// }
// object.name = "riya"
// console.log(object.name)
//output riya



// const func = (function(x){
//     delete x
//        return x;
// })(8)

// console.log(func)


// op 8 bcs delet use only in object 



/////////////////////////////

// const user = {
//     name :"hema"
//     ,age:21,
//     "web dev" : true
// }

// console.log(user["web dev"])
//op true

// const user = {
//     name :"hema"
//     ,age:21,
//     "web dev" : true
// }

// console.log(user.name)
// console.log(user["name"])
// op hema hema

////////////////////////////
//  const property  = "firstName"
//  const value = "hema"

// let obj = {
//     property : value
// }

// console.log(obj)
// property :"hema"




// const property  = "firstName"
//  const value = "hema"

// let obj = {
//     [property] : value
// }

// console.log(obj)
// op FirstName value "hema"

////////////////////////////

// let data = {
//     name :"hema",
//     age : 21,
//     position :"web dev"
// }

// // console.log(data)
// for(key in data ){
//     console.log(key)
// }

//op 
// name 
// age
//  position
//////////////////////////////////

// let data = {
//     name :"hema",
//     age : 21,
//     position :"web dev"
// }

// // console.log(data)
// for(k in data ){
//     console.log(data[k])
// }

// op hema 24 dev

//////////////////////////////

// let data = {
//     name :"hema",
//     age:21,
//     name :"trisha"
// }

// console.log(data)

// {name: 'trisha', age: 21}
// age
// : 
// 21
// name
// : 
// "trisha"
// [[Prototype]]
// : 
// Object


/////////////////////////////////////////
// let data = {
//         num:200,
//         num2:100,
//         name :"trisha"
//     }


    

//  function  multiplyByTwo(newNum){
//            for( key in newNum){
//             if(typeof newNum[key] === "number"){
//                 newNum[key] = newNum[key]*2
//             }
//            }
//     }
//     multiplyByTwo(data)
//     console.log(data)
   
///////////////////////////////////////

// const a = {};
// const b = {key :"b"}
// const c = {key:"c"}

// a[b] = 123;
// a[c] = 456;

// // console.log(a[b])
// console.log(a)


