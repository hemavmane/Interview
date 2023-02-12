
/////////////// bind method/////////////

// let obj = {
//    firstName:"hema",
//    lastName:"mane"
// }

// function PrintName(greet){
//     console.log( greet+ " "+this.firstName + " "+ this.lastName)
// }


// let storeData = PrintName.bind(obj,"hello")
// storeData()

///////////////////////// polyfill method or  my own or custom bind method//////////
////////////////////////////////////// case1 ////////////////////

// Function.prototype.mybind = function(...args){
//     // console.log("first")
//     // let getNamepointstothis = this 
// // here getNamepointstothis referece to this 
//     return function(){
//         //getname.mybind return function so ill return 
//          this.call(args[0])
//     }
// }

// function getName(greet){
//     console.log(this.firstName + " " + this.lastName +""+ greet)
    
//  }

//  let storeName = getName.mybind(obj,"hello")
//  storeName()
// // here arguments printing undefined 


// function PrintName(greet){
//         console.log( greet+ " "+this.firstName + " "+ this.lastName)
//     }
    
    
//     let storeData = PrintName.bind(obj,"hello")
//     storeData()
    
////////////////////////////////////case2/////////////////////
    
    
    // Function.prototype.mybind = function(...args){
    //     // console.log("first")
    //     let getNamepointstothis = this 
    // // here getname referece to this 
    // params = args.slice(1)
    // // it will remove first agrs that is obj and print second argument but it is in the ofem
    // // of arrya so use apply
    //     return function(){
    //         //getname.mybind return function so ill return 
    //          getNamepointstothis.apply(args[0],params)
    //     }
    // }
    
    // function getName(greet,state){
    //     console.log(this.firstName + " " + this.lastName +" "+ greet +" "+ state)
        
    //  }
    
    // case1 // let storeName = getName.mybind(obj,"hello")
    //  storeName()
     // output hema manehello


//  case2//    let storeName = getName.mybind(obj,"hello")
// storeName("bidar")
     //output hema manehello
// undefined



///////////////////////// case 3 ///////////////////

// let obj ={
//     firstName :"hema",
//     lastName:"mane"
// }

// Function.prototype.mybind = function(...args){
//     // console.log("first")
//     let getNamepointstothis = this 
// // here getNamepointstothis referece to this 
// params = args.slice(1)
// // it will remove first agrs that is obj and print second argument but
// //  it is in the array form
// // of arrya so use apply
//     return function(...args2){
//         //getNamepointstothis.mybind return function so ill return 
//         // i need to pass third argument bcs it will take while excuting code
//          getNamepointstothis.apply(args[0],[...params,...args2])
//          // now args2 works  as state argument we have to concat it using 
//         //  spread operator
//     }
// }


// function getName(greet,state){
//     console.log(this.firstName + " " + this.lastName +" "+ greet +" "+ state)
    
//  }

//  let storeName1 = getName.mybind(obj,"Wellcome to")
//  storeName1("karnataka")

// output //hema mane Wellcome to karnataka
// 



//////////////////////// function prototype ////////////////////////////////

// Array.prototype.Hema = function(){
//      console.log("hema")
// }

// let nums = [5,6,7]
// nums.Hema()

// Function.prototype.Hema = function(){
//      console.log("hema mane")
// }

// function logger(){}

// logger.Hema()

///////////////////////////////////////////////////map/////////////

// Array.prototype.Mymap = function(cb){
//      let newArray = []
//      // map data present in non array so we to store in array
//     for(let i=0; i<this.length; i++){
//              newArray.push(cb(this[i]))
//                // to pass indiual value we have to use
//                //for loop cb function for cll the map
//     }
//      //   console.log(this)
//        // here this referece to array
//        return newArray
// }


// let arr  = [3,4,5,6,6]

// let result =arr.Mymap((num)=>{
//      return num*4
// })

// console.log(result)


// Array.prototype.hemamap = function(callbackfun){
//        let newArray =[]
//        for(let i=0; i<this.length; i++){
//                  newArray.push(callbackfun(this[i]))
//        }
//        return newArray
// }



// let nums = [4,5,6,7]

// let result = nums.hemamap((item)=>{
//             return item*2
// })

// console.log(result)


/////////////////////////////custom filter or polyfil/////////////////////////////////////////////////////

// Array.prototype.createMyOwnFilterMethod = function(cb){
//      console.log(this)
//      let newArray = [];
//      for(let i=0; i<this.length; i++){
//          if(cb(this[i])){
//           newArray.push(this[i],index,element)
//          } 
//      }
//      return newArray
// }

// let arr1 = [8,4,5,3,2]


// arr1.createMyOwnFilterMethod((item)=>{
// console.log(item%2==0 ? "even" :"odd")
// })


////////////////////////////// forEach /////

// Array.prototype.myforeach = function(callbackfunc){
//      // console.log(this)
   
//      for(let i=0; i<this.length; i++){
//          callbackfunc(this[i],i,this)
//      }
     
// }


// let arr = [4,3,2,9,7]
// arr.myforeach((element)=>console.log(element))



/////////////////////// ruduce///////////////


// let arr = [5,2,3,4,5]

// Array.prototype.myReduce = function(cb,initial){
//      //   console.log(this)
//      let acc = initial
      
//        for(let i=0; i<this.length; i++){
//           acc = acc ? cb(acc,this[i], i,this) : this[i];
//        }
//        return acc;
// }


// console.log(arr.myReduce((acc,current)=>acc+current,0))


////////////////////////////////////////////////////// pollyfill for find ///////////////////////

// Array.prototype.myfind = function(cb){
//       for(let i=0; i<this.length; i++){
//           if(cb(this[i],i,this)){
//                return this[i]
//           }
//       }
// }

// let arr = [3,2,4,5]
// console.log(arr.myfind((ele)=>ele>1),'find')





//polyfill for objects///////////////////////////////////////

// const test = {
//      a: 123,
//      b: 456,
//    };
   
//    function tester(a, b) {
//      return `a:${this.a} and b:${this.b} other ${a} and ${b}`;
//    }
   
//    //polyfill bind
//    Function.prototype.vasanthBind = function (scope, ...args) {
//      scope._this = this;
//      return function () {
//        return scope._this(...args);
//      };
//    };
   
//    let test1 = tester.vasanthBind(test, 20, 30);
//    console.log(test1(), "bind");
   
//    //polyfill call
//    Function.prototype.kiranCall = function (scope, ...args) {
//      scope._this = this;
//      return scope._this(...args);
//    };
//    console.log(tester.kiranCall(test, 20, 30), "call");
   
//    //polyfill apply
//    Function.prototype.kiranApply = function (scope, args) {
//      scope._this = this;
//      return scope._this(...args);
//    };
   
//    console.log(tester.kiranApply(test, [20, 30]), "apply");
   







