// // function Myoverloading({num1,num2}){
// //         console.log({num1,num2})
// //         // here num1 and num2 have undefined value bcs of overloading is not allowed in js
        
// // }
// // Myoverloading(5,6)
// // Myoverloading({num1:5,num2:6})

// // function Myoverloading({num1,num2}){
// //         console.log({num1,num2})
      
// //         // here i will get value  { num1: 5, num2: 6 }
// //    // bcs its overloading
// // //  but here also it will not work for simple input
// // }
// // // Myoverloading(5,6)
// // //  {num1:undefined,num2:undefined}
// // // Myoverloading({num1:5,num2:6})



// function Myoverloading({num1,num2}){
//         console.log({num1,num2})
//     // alternate way for this is here
//     if(typeof num1==='object'){
//         return Myoverloading(num1.num1,num1.num2)
//     }
   
// }
// Myoverloading(5,6)
// Myoverloading({num1:5,num2:6})




