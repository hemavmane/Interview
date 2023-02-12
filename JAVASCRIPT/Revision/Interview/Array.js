// let arr =[1,2,23,4,5,6,6]


// let arr2=arr.filter(items=>{
//     return  items>2
   
// }
// )
// console.log(arr2)

// let arr1 = ['jhfdk','jskjfd','sdfjkd']
// let sortarr = arr.sort((a,b)=>{
//     return(a-b)
// })
// console.log(sortarr)

// retur value
// array filter is an arrayprototype whcich returns an new array based on the condition passed
// A shallow copy of a portion of the given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. 
// If no elements pass the test, an
//  empty array will be returned

///////////////////////////////////////////////////
// find()

// find is array protype which return a first satiesfied  value based on the condition passed

// ntg is there means it return undefined

// let arr =[4,5,6,9,9]
// let k = arr.find(item=>item>5)
// console.log(k)
// it willnot go through send iof he got a first index only condition value

// findIndex
// it will work for index same functionality as  find
// defult value -1
////////////////////////////////////////////////////////
// findLastIndex() it finds the last index value it should be greater than given conditon
// findLast() it finds last highest value of index in the array 
// findLast((element) => { /* … */ })
// default undefined
// let arr =[4,5,6,90,9]
// let arr2 = arr.findLast(i=>i>2)
// console.log(arr2)



///////////////////////////////////////////////////////////////
// flat()
// A new array with the sub-array elements concatenated into it.

// let arr =[5,6,3,4,76,43,[[[[[[[[[[[[[[[[[[[[[8]]]]]]]]]]]]]]]]]]]]]]
// console.log(arr.flat(10))

/////////////////////////////////////////////////////////
// flatmap()
// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
// return value
// A new array with each element being the result of the callback 
// function and flattened by a depth of 1.


// let arr =[5,6,[6,3],[6,3,2,[7,8]],[]]

// let arr3 =arr.flatMap(item=>item)
// console.log(arr3)

// const arr1 = [1, 2, [3], [[[4, 5]]], 6, []];

// const flattened = arr1.flatMap(num => num);

// console.log(flattened);

// it will merge only one dimentionnal array 


/////////////////////////////////////////////

// let arr = [2,4,5,6,7]
// arr.forEach((element)=>{
//       console.log(element*3)
      
// })

// console.log(arr)
//////////////////////////////////////////////
// Array.from()
// let arr ="hema"
// console.log(Array.from(arr))
// [ 'h', 'e', 'm', 'a' ]
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object
// Array.from(arrayLike)
// A new Array instance.
///////////////////////////////////////////
// include()
// indexof()
// Array.isArray()
// let arr ={j:"hema"}
// console.log(Array.isArray(arr))

// Map()
// manipulate the data using map
// map((element) => { /* … */ })
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })
// A new array with each element being the result of the callback function.
// let arr = [4,6,6,7,8]
// let p =arr.map((k)=>{
//     return k+4
// })

// console.log(p)
// console.log(arr)
////////////////////////////////////////////////




// pop
// last out
// push last in 
// que => first in first out  /// fifo
// stack =>last in first out  /// lifo

// let ar =[5,6,7]
// console.log(ar.pop())

// let ar =[5,6,7]
// console.log(ar.push(6))
// console.log(ar)


// let ar =[5,6,7]
// console.log(ar.shift())
// console.log(ar)


// let ar =[5,6,7]
// console.log(ar.unshift(98))
// console.log(ar)


//////////////////////////////////////////////////////////
// reduce()
// rteduce will return a  accumulation    value of given array
// let ar =[8,4,5,76,8,9]
// let k=ar.reduce((acc,cu)=>{
//     return acc+cu
// })

// console.log(k)



// slice
// slice will return in new array
// splice return original array