// first order function
const handler = () => console.log("This is a click handler function");
// output : This is a click handler function




// const handle = () => console.log("This is a click handler function");

// first class fucniton
// after passing function passed as argument is called as first class funciton
// const handler = () => console.log("This is a click handler function");
// document.addEventListener("click", handler);


// when any fucntion passed as aragument is callled as first class fucntion
// https://www.ycombinator.com/
// https://apply.ycombinator.com/session/new?continue=https%3A%2F%2Fapply.ycombinator.com%2F
// https://github.com/sudheerj
// https://developers.turing.com/


// console.log(0**0);


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Object 

// Using object literal
// syntax :-
// object={
//     property1:value1,
//     property2:value2.....,
//     propertyN:valueN
// }  

// Profile={
//     name:"vasanth",
//     age:25,
//     profession:"webDeveloper",
//     salarry:50000,
// }

// console.log(Profile.name+Profile.age+Profile.profession+Profile.salarry)
// output: vasanth25webDeveloper50000

// console.log(Profile.name+""+Profile.age+""+Profile.profession+""+Profile.salarry)
// output: vasanth25webDeveloper50000
// console.log(Profile.name+" "+Profile.age+" "+Profile.profession+" "+Profile.salarry)
// output vasanth 25 webDeveloper 50000

// ******************************************************************
// Object using new keyword or creating by instance of object

// let information= new Object()

// information.age=21
// information.name="hema"
// information.mentor="vasanth"
// console.log(information)
// output { age: 21, name: 'hema', mentor: 'vasanth' }

// console.log(information.age+" "+information.name+" "+information.mentor)


// by using object as constructor

// Syntax

// function info(id,name,salarry){
//     this.id=id,
//     this.name=name,
//     this.salarry=salarry
// }

// addData=new info(84,"chandan",400000)

// console.log(info.id+" "+info.name+" "+info.salarry)
// // output undefined info undefined
// console.log(addData.id+" "+addData.name+" "+addData.salarry)
// 84 chandan 400000


// what is property

// function info(id,name,salarry){
//     this.id=id;
//     this.name=name;
//     this.salarry=salarry


//     // now i want to update my salarry so pass

//     // this.updtedSalary=updtedSalary  
//  here updatedsalary is property

//   function updtedSalary(ChangeSalary){
//     // here updatedsalary is method
//     this.salarry=ChangeSalary
//   }
// }

// r=new info(8,"hema",20000)
// console.log(r.id+"  "+ r.name+" "+ r.salarry)

// p=new info(8,"hema",30000)
// console.log(p.id+"  "+ p.name+" "+ p.salarry)


// Object.entries() method
// /////////////////////////////////////////////////////////
// const Profile={
//         name:"vasanth",
//         age:25,
//         profession:"webDeveloper",
//         salarry:50000,
//     }

//     console.log(Object.entries(Profile))
//     [
//         [ 'name', 'vasanth' ],
//         [ 'age', 25 ],
//         [ 'profession', 'webDeveloper' ],
//         [ 'salarry', 50000 ]

//       ]
/////////////////////////////////////////////////////



//     const obj = { 10: 'arry',
//      21: 'barry',
//       '-2': 'carry'
//      };  
// console.log(Object.entries(obj)[2]);  
// output [ '-2', 'carry' ]

// const obj = { 10: 'arry',
// 21: 'barry',
//  '-2': 'carry'
// };  
// console.log(Object.entries(obj)[2]);  

/////////////////////////////////////////

let obj = {
     10: 'arry',
      21: 'barry',
      2: 'carry'
}
// console.log(Object.obj[key])
console.log(Object.entries(obj))

    console.log(Object.keys(obj),Object.values(obj))








