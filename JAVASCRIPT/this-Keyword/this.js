// this.a = 10
// // console.log(this)
// // console.log(this.a)
// let user = {
// name : "hema",
// yearOfBirth : 2000,
// getParent(){
//   const  getName = ()=>{
//         console.log(this.name)

//     }
//     getName()
// }

// }

// user.getParent()

// in case of this.a this refers to window or global
// object
// in case of object this referce to its current
// object or parents but it should be object only
// in case of funcstion it referce to its cuurent object
// in case of arrow this refers to its parents of
// current parents

////////////////// class cunstructor ////////

// class usingThis {
//   constructor(x) {
//     this.name = x;
//   }
//   getName() {
//     console.log(this.name);
//   }
// }

// let Myname = new usingThis("hema");

// Myname.getName();

/// here  this have acces to of inside constructor data

// const getName = {

//         Firstname : "hema mane!",
    

//     getMyname(){
//         const Firstname = "mane"
//         return this.Firstname
//         // here this will referce to obj that is parents output is hema mane!

//     }
// }


// console.log(getName.getMyname())
/////////////////////////////////////////////////////////////////////////////////////////////
// function makeUser() {
//          return{
//             name:"hema",
//             web : this
                 // here it referec to window object and in global there is ntg name so it will
                 // print empty
//  }
//          }
          

// let user = makeUser()

// console.log(user)


// function makeUser() {
//     return{
//        name:"hema",
//        web (){
//       return  this
//     }
// }
//     }
     
// // here this referc to his parents obje is makeUser so print hema
// let user = makeUser()

// console.log(user.web().name)

////////////////////////////////////////////////

// let user = {
//     name :"hema mane!",
//     getName(){
//         console.log(this.name)
//     }
// }

// let data =setTimeout(user.getName(),1000)

// console.log(data)


// let calculator = {
//         read (){
//             this.a = +prompt("a = ",0)
//             ,this.b = +prompt("b = ",0)
//         }
//         ,sum(){
//             return this.a +this.b
//         },
//         mul(){
//             return this.a*this.b
//         }
// }

// calculator.read(5)
// console.log(calculator.sum())
// console.log(calculator.mul())

////////////////////
// var length = 5;
// function callback(){
//     console.log(this.length)
// }

// let obj = {
//      length :10,
//      method(fn){
//         fn()
//      }
    
// }

// obj.method(callback)
//op 5 method hhave fun it clng inside
// but it will acces have of global so t

//////////////////////////////////

// var length = 5;
// function callback(){
//     console.log(this.length)
// }

// let obj = {
//      length :10,
//      method(){// argument = [calback,2,4]
//         console.log(arguments)
//         arguments[0]()
//         // op 3 bcs its seein array length
        
//      }
    
// }

// obj.method(callback,2,4)
// op 3 bcs its seein array length
