/////////////////////////// call ////////
// this is repeating function so use call to avoid this normal calling
// let hemaobj = {
//     FirstName : "hema",
//     LastName :"mane",
//     getData : function(greet){
//          return greet + " " + this.FirstName +  " "+this.LastName 
//     }
// }

// let obj2 = {
//     FirstName: "vasanth",
//     LastName:"kumar",
//     getData : function(greet){
//         return greet + " " + this.FirstName +  " "+this.LastName 
//    }
// }
// let obj3 = {
//     FirstName: "vasanth",
//     LastName:"kumar",
   
// }

// let data = hemaobj.getData('hello')
// let data1 = obj2.getData('hello')
// console.log(data)
// console.log(data1)



//USING CALL METHOD//
// let hemaobj = {
//     FirstName : "hema",
//     LastName :"mane",
    
// }

// let obj2 = {
//     FirstName: "vasanth",
//     LastName:"kumar",
   
// }
// let obj3 = {
//     FirstName: "kiran",
//     LastName:"kumar",
   
// }

//  function getData(greet){
//     return greet + " " + this.FirstName +  " "+this.LastName 
// }
// let data = getData.call(hemaobj,'hello')
// let data1 = getData.call(obj2,'hello')
// let data3 = getData.call(obj3,'hello')
// console.log(data)
// console.log(data1)
// console.log(data3)


////APPPLY //

// let hemaobj = {
//     FirstName : "hema",
//     LastName :"mane",
    
// }

// let obj2 = {
//     FirstName: "vasanth",
//     LastName:"kumar",
   
// }
// let obj3 = {
//     FirstName: "kiran",
//     LastName:"kumar",
   
// }

//  function getData(greet,age){
//     return greet + " " + this.FirstName +  " "+this.LastName + 'i am fine'+ 
//    +age+"old age"
// }
// let data = getData.call(hemaobj,'hello',21)
// let data1 = getData.call(obj2,'hello',21)
// let data3 = getData.call(obj3,['hello',21])
// console.log(data)
// console.log(data1)
// console.log(data3)



////////apply///////////////////////////////////////

// let obj = {
//     name :"hema",
//     age:21
    
//   }
//   const obj2 = {
  
//     city :"bidar"
    
//   }
   
//    function getName(city,pro,enj){
//       return "i  am "+this.name + " from " + city +" " +  pro + "" +enj 
//     }
//     console.log(getName.apply(obj,["dongoan","webdev","enjoy life"]))


///////////////////////////////// bind //////////////////////////////////

// bind provides one function it will excute later 
// with this method we can reuse of this function

// let obj = {
//      name : "hema!!"
// }


// function greeting(greet,age){
//     return "hello" + " " + this.name + " " + "" + greet + "my age is " + "" + age
// }

// let bindgreetingfunc = greeting.bind(obj)
// console.log(bindgreetingfunc("good morning",21))
// console.log(bindgreetingfunc("how are you",21))


// var name = "riya"
// var name = "priya"
// const name = "riya"
// const name = "jiya"
// console.log(name)
// let obj1 = {
//     name :"hema",
//     hello(){
//         return `${this.name}`
//     }
// }

// let obj2 = {
//     name : "trisha"
// }

// console.log(obj1.hello.call(obj2))


// let obj = {
//     name :"hema",
//     age:21
    
//   }
  
//   const obj2 = {
//     city :"bidar"
    
//   }
   
//    function getName(city,pro){
//       return "i  am "+this.name + " from " + city +" " +  pro
//     }
//     let getresult = getName.bind(obj,'dongaon','web dev')
//     console.log(getresult())

///////////////// append one array to another/

// let arr = [5,6,7,3]
// let arr3  = [6,7,3,0]


// arr.push.apply(arr,arr3)
// console.log(arr)


// let arr = [6,3,6,3,0]
// let ar3 = [3,5,2,9]

// let max =Math.max.apply(null,arr)

// console.log(max)












