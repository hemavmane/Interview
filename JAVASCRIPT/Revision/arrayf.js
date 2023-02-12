// some() --------------------------------------------->
// it is act as a if condition when we have to check one condition
// it includes function
// let array =[21,14,6,7,]
// // array.some(checkEligible)

// function checkEligible(test){
//     return test>=18
// }
// // console.log(checkEligible())
// console.log(array.some(checkEligible)

// // EVERY()
// some( ) and every() is same but in case of some it will true if any one condition is true but in case of 
// every it will be true if and only if every array value are fallowing the condition

// let array =[21,14,6,7,]
// // array.some(checkEligible)

// function checkEligible(test){
//     return test>=18
// }
// // console.log(checkEligible())
// console.log(array.every(checkEligible))


// FOR IN LOOP
// 5 TYPES OF LOOP
// for loop
// for in LOOP  & for of // FOR OBJECT
// while LOOP
// do while LOOP
// forEach loop



// FOR IN LOOP

let obj = {
    fname:"hema",
    lname:"mane",
    age:21,
    a:"dongaon"
}


for(let key in obj){
    console.log(obj[key],"this is value")
//     output
//     hema this is value
//     mane this is value
//     21 this is value
//     dongaon this is value


//     console.log(key,"this is a key")
//     output
//     fname this is a key
// lname this is a key
// age this is a key
// a this is a key
}