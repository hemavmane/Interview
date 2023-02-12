// Array method .........

// isArray()  ......



////////////
// push();.........
// pop()............

//shift()........
//unshift()............

// slice().....
// splice()..........

// lastIndexof()......
// indexof().......

//concat()
//reverse() .............
//toString() ............
//join() ...........
//flat() .........



// sort()
// map()
// filter()
// every()
// some()
//reduce()
// foreach()





// ADVANCE  TOPICS

// promises 
// closure ......
// class 
// prototype
// function


// CLOSOURE
//  CLOUSURE IS THE combination of function and the lexical environment
//  whithin whwich varibale declare
//  it have three scope 
// 1 block which inside curly braces itself'
// 2 outer which outside of curly braces 
// 3 global
// exm

// function greeting(name){
//   let  name;
// return function (msg){
//    console.log( name+ msg)
// }
// }

// let greet = greeting()
// console.log(greet())
/////////////////////////////////////////////////////
// push will add one data from last and give new length 

// pUSH push()
// let arr = ["hema","mane","is ","software Engineer"]
// let arr = [3,5,12,5,20]
// let arr = ["hema","mane","is ","software Engineer"]
// let pushArr = arr.push(10)
// console.log(pushArr)
// console.log(arr)
//////////////////////////////////////////////////////
// it will remove data from last and give u eliminated data and new array
//  POP push()
// let arr = ["hema","mane","is ","software Engineer","hema"]
// let k = arr.pop()
// console.log(k)
// console.log(arr)
//////////////////////////////////////////////////////////////
// it  will return removed data from bigning and new array
// SHIFT shift()
// let arr = ["hema","mane","is ","software Engineer","hema"]
// let array = arr.shift()
// console.log(array)
// console.log(arr)
//////////////////////////////////////////////////////////////////////////////////
// unShift()
// let arr = ["mane","is ","software Engineer"]
// let array = arr.unshift("hema")
// console.log(array)
// console.log(arr)

// The unshift() method adds one or more elements to the be
// ginning of an array and returns the new length of the array./
// The new length property of the object upon which the method was called.


// SLICE slice()
//slice is a method  which make SHALLOW COPY OF array selected
//  start to end point (end willnot include)
// start and end is the index of the array
// original array willnot be modified
// let name = ["hema","uma",5,6,"vasant","vaibhav"]
// console.log(name.slice(4,0))
// console.log(name)

// SPLICE  splice()
// The splice() method changes the contents of an array by removing or
//  replacing existing elements and/or adding new elements
// let n = ["hema","uma",5,6,"vasant","vaibhav"]
// console.log(n.splice(1,2,'k'))
// syntax 
// splice(start)
// splice(start,deletcount,item)
//splice(start,deletecount,item1,item2........)
// An array containing the deleted elements.

// If only one element is removed, an array of one element is returned.

// If no elements are removed, an empty array is returned.

// FLAT flat()
// let arr = [3,4,5[3[[4]]]]

// let f =arr.flat(5)
// console.log(arr.flat(5))







//1...) concat ////////////////////////////////////////////////////////////////
// it is used as merging two or two array or add value 

// let arr = [2,4,5,6]
// let concatarr = arr.concat("concatarr","this ","is","new","array")

// console.log(concatarr)

// let arr1 =["hema","mane"]
// let arr = [2,4,5,6]
// let arr2 = [4,6,7]
// let concatarr = arr.concat(arr1,arr2)


// console.log(concatarr)

// 2......) join it will join inside value into single one.....................

// let arr1 =["hema","mane"]
// let arr = [2,4,5,6]
// let arr2 = [4,6,7]
// let joinarr = arr.join(" ")
// console.log(joinarr)
// // hema mane
// // 4 6 7
// // 2 4 5 6



// let arr1 =["hema","mane"]
// let arr = [2,4,5,6]
// let arr2 = [4,6,7]
// let joinarr = arr.join("")
// console.log(joinarr)
// // hemamane
// // 467
// // 2456

// 3 ........ ) reverse it revese the value.....................................
// // let arr1 =["hema","mane"]
// let arr1 =[ 3,5,6,76 ]
// let reversearr = arr1.reverse()
// console.log(reversearr)
// // [ 'mane', 'hema' ]
// [ 76, 6, 5, 3 ]


// slice ..................................................
// it is method which take value from original array and create new array 
// this took two parameter start index and end index
// let arr = ["hema","mane","this","is ","the"]

// let slicearr = arr.slice(0,2)
// console.log(slicearr)
// [ 'hema', 'mane' ]

// let arr = ["hema","mane","this","is ","the"]

// // let slicearr = arr.slice(2,4)
// let slicearr = arr.slice(2,-1)
// console.log(slicearr)
// [ 'this', 'is ' ]


// 5 .......... ) splice()................................................

// three parameter
//index start add delete

let arr = [3,5,6,"hema","riya"]
//  arr.splice(2,0,"mane")
arr.splice(0,2,1)
console.log(arr)

// Map().................................................................

// it will work not efect on existing array but it will create new aray
//  depends on condition


// let arr = [2,3,4,5]

// let array = arr.map((index)=>{
//        return(
//         index*3
//        )
// })

// console.log(array)

//  let arr = [2,3,4,5]

// let array = arr.map(test)

// function test(index){
//    return index*3
// }
// console.log(array)

// let arraofobj = [
//     {   
//         id:1,
//         fname:"hema",
//         lname:"mane1",
//     }
//     ,{   
//         id:2,
//         fname:"hema1",
//         lname:"mane12",
//     },
//     {
//         id:3,
//         fname:"hema2",
//         lname:"mane1",

//     },
    
//     {
//         id:4,
//         fname:"hema3",
//         lname:"mane3",
//     }
// ]



// let array = arraofobj.map((index)=>{
//        return(
//         index.id
//        )
// })

// console.log(array)


// forEach this is use for printing each value each time---------------------------->

// let array =arraofobj.forEach(element => {
//     // console.log(element.fname)
//     // stattement
//     // ouput
// //     hema
// // hema1
// // hema2
// // hema3
// // console.log(element.id)
// // 1
// // 2
// // 3
// // 4
// });


// MULTIDIMENTIONAL ARRAY------------------------------------------------------>

// let array = [
//     [1,"hema",3,"mane"]
//     ,["vasanth",27,"kumar","vinayagam"]
//   , [4,"souvik",24,"deb"]
//    ,[6,"vaibhav","agrawal",25]
// ]

// // console.log(array)


// for(let a = 0; a<4; a++){
//     // console.log(array[a])
//     for(let b = 0; b<4; b++){
//         console.log(array[a][b],"---------------->")
//     }
// }

// switch CASES------------------------------------------->
// let day = 2;

// switch(day){
//     case 0 :
//     console.log("mon")
//     break;

//     case 1 :
//     console.log("tue")
//     break;

//     case 2 :
//     console.log("wed")
//     break;

//     case 3 :
//     console.log("thur")
//     break;

//     case 4 :
//     console.log("fri")
//     break;

//     case 5 :
//     console.log("sat")
//     break;

//     case 6:
//     console.log("sun")
//     break;
// 

// switch  cases


// let day = 20;

// switch(true){
//     case  (day>=15 && day<=18):
//     console.log("mon")
//     break;

//     case (day>=5 && day>=22):
//     console.log("tue")
//     break;
   
//     default:
//     console.log("false")

// }

// indexOf--------------------------------------->
// it will search for start index of array if got one means it will not move ahead

// let a = [2,"rahul","raj","hema","raj"]
// console.log(a.indexOf("raj",3))
//index 4

// let a = [2,"rahul","raj","hema","raj"]
// console.log(a.indexOf("raj",2))
// index 2

// let a = [2,"rahul","raj","hema","raj"]
// console.log(a.indexOf("raj",6))
// if mention index or given valu not present means bydefault it will give -1
// -1


// lastInedxOf -------------------------------------------------------->
// it will search from last of the array
// if mention index or given valu not present means bydefault it will give -1

// let a = [2,"rahul","raj","hema","raj"]
// console.log(a.indexOf("raj"))
// 2
// differnce--------------------->
// let a = [2,"rahul","raj","hema","raj"]
// console.log(a.lastIndexOf("raj"))
// 4


// let a = [2,"rahul","raj","hema","raj"]
// console.log(a.lastIndexOf("raj",4))
// 4

// INCLUDES ------------------------------------------------->
// it will give boolean value
// let ar =[21,14,6,7,]
// let arr = ar.includes(21)
// console.log(arr)
// true


// let ar =[21,14,6,7,]
// let arr = ar.includes(28)
// console.log(arr)
// false



// sort()
// it will sort in lafabetic order

// let arr = ["hema",1,"riya","priya",5,"aman"]
// let sortarr = arr.sort()
// console.log(sortarr)

// let obj =[
//     {
//         name:"a",
//         price:20,
//     },
//    {
//     name:"c",
//         price:10,
//    },
//    {
//     name:"b",
//         price:19,
//    }

// ]

// let sortobj = obj.sort((a,b)=>{
//     return a.price-b.price
// })
// console.log(sortobj)










