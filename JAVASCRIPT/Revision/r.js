///////////////////////////////////////////////////////////////////
// console.log(Boolean(0)) //false
// console.log(!0); //true
// console.log(!!0); //false
// console.log(Infinity); 
// console.log(Boolean(10));
// console.log(Boolean());

//////////////////////////////////////////////////////////////////

// // let i=1;
// // let num=20;
// // for(let i=1; i=num.length; i++){
// //     if(num%i===0){
// //         return i
// //     }
// // }
// // console.log(i);

/////////////////////////////////////////////////////////////////

// // function declaration

// // function myfunc([[parm],[par]]){
// //     statements
// // }


// // function expression 

// // function myfunc([[parm],[parm]]){
// //     statements
// // }

// // function  (param,param,/*  ....,         */ param2){
// //   statements
// // }

// // function name(para,para2,/*.....,*/ par4){
// //     statements
// // }
// // 1.// function expression are not hoisted


// // types of function expression 
// //  annonymous


// // difference btne expression and a function declaration is the function name, 
// // which can be omitted in function expressions to create anonymous functions.

// // annonymous function
// // console.log(nothoisted);
// // nothoisted()
// // var  nothoisted = function(){
// //          console.log("hema")
// // }

//////////////////////////////////////////////////////////////////

// // named function

// // const num={
// //     fact:function h(n){
       
// //         if(n<=1){
// //             return 1
// //         }else{
// //             return n*h(n-1)
//         //  5<=1 5(5-1)=5  
//          // 4<=1 4(4-1)=4
//          // 3<=1 3(3-1)=3
//          // 2<=1 2(2-1)=2
//          // 1<=1 1=1
// //         }
// //     }
// // }

// // console.log(num.fact(5))


// // const foo = function () {};
// // foo.name 

// // const foo2 = foo;
// // foo2.name 

// // const bar = function baz() {};
// // bar.name 

// // console.log(foo === foo2); // true
// // console.log(typeof baz); // undefined
// // console.log(bar === baz); // false (errors because baz == undefined)

// // let triplesum=function(nums){
// //     for(let i=0; i<)
// // }

// // console.log(triplesum[-1,0,1,2,-1,-4])


// // for(let i=0; i<3; i++){

// //     for(let j=0; j<3; j++){

// //         for(let k=0; k<3; k++){

// //     console.log(i ," am i",j,"am j",k," am k");
// //         }
// //     }
// // }

// // companys name
// // actyv.ai
// // automatad
// // cointab
// // indus net
// // “Honestly, I possess all the skills and experience that you're looking for. I'm pretty confident that I am the best candidate for this job role. It's not just my background in the past projects, but also my people skills, which will be applicable in this position.
// // job4freshers
// // bubbal shot 
// // binary search
// // 

////////////////////////////////////////////////////////////////

// // var user = {
// //         name: "Vishal patil",
// //         address: {
// //           primary: {
// //             house: "1",
// //             street: {
// //               main: "01",
// //               cross: "01"
// //             },
// //             village: "nagrale",
// //             district: "sangli"
// //           },
// //           secondary: {
// //             house: "2",
// //             street: {
// //               main: "02",
// //               cross: "02"
// //             },
// //             village: "sangli",
// //             district: "sangli"
// //           }
// //         },
// //         gender: "Male",
// //         age: 22,
// //         nationality: "Indian"
// //       };
// //       var ans = {}
// //       function Flatten(obj, startWith) {
// //         for (key in obj) {
// //           const UpdatedKey = `${startWith}${key}_`
// //           if (typeof obj[key] === "object") {
// //             Flatten(obj[key], UpdatedKey)
// //           } else {
// //             ans[UpdatedKey] = obj[key];
// //           }
// //         };
// //       };
      
// //       Flatten(user, "")
// //       console.log(ans);
    

///////////////////////////////////////////////////////////////////////////////
// // 1773
// // 804

// // https://leetcode.com/problems/count-items-matching-a-rule/
// // https://leetcode.com/problems/unique-morse-code-words/


// // let result =NaN**0
// // console.log(typeof(0));


// // if(null){
// //         console.log("aircampus");
// // }else{
// //         console.log("aircampus learn ");
// // }




/////////////////////////////////////////////////////////////

// // arr = [ 1, 3, 2, 4, 0 ]

// // var frequencyObj = {}
// // var ans = [];

// // for(var i = 0; i < arr.length; i++) { // O(n)
// //   if(frequencyObj[arr[i]] == undefined) {
// //     frequencyObj[arr[i]] = 1;
// //   } else {
// //     frequencyObj[arr[i]]++;
// //   }
// // }

// // for(var key in frequencyObj) { // O(n)
// //   if (frequencyObj[key] == 2) {
// //     ans.push(key);
// //   }
// // }

// // return ans; 
// // O(n) + O(n) ~~ O(n).

//////////////////////////////////////////////

// // Note:- 

// // if (undefined) {
// //   console.log("Aircampus");
// // } else {
// //   console.log("Please learn undefined");
// // }

// // if (null) {
// //   console.log("Aircampus");
// // } else {
// //   console.log("We know null");
// // }


////////////////////////////////////////////////////

// // arr = [0, 0, 2]
// // [4,2,4,2,3,1]


// // [4,-2,-4,-2,-3,1] => [4, 2]

// // base case, how to handle 0. 
// // var ans = [];

// // var countOfZero = 0;
// // for(var i = 0; i < arr.length; i++) {
// //   var value = Math.abs(arr[i]);
  
// //   if (arr[value] == 0) {
// //     countOfZero++;
// //   } else if(arr[value] < 0) {
// //     ans.push(value);
// //   } else {
// //     arr[value] = -1*arr[value];
// //   }
// // }

// // if( countOfZero == 2 ) {
// //   ans.push(0);
// // }


/////////////////////////////////////////////////////
// // arr = [,0,2,1]
// // var ans = [];

// // for(var i = 0; i < arr.length; i++) {
// //   var value = Math.abs(arr[i]);
// //   value = value % n;
  
// //   if( arr[value] == 0) {
// //     arr[value] = -1*n;
// //   }
// //   else if(arr[value] < 0) {
// //     ans.push(value);
// //   } else {
// //     arr[value] = -1*arr[value];
// //   }
// // }
  
  
///////////////////////////////////////////////////////////////

// // if(undefined){
// //         console.log("aircampus");
// // }else{
// //         console.log("aircampus learn ");
// // }


///////////////////////////////////////////
// // let arr = [4, 32, 2, 5, 8];

// // for (let i = 0; i < arr.length; i++) {
// //         console.log(arr[i]," -------------------------");
       
// //   for (let j = i + 1; j < arr.length; j++) {
// //         console.log(arr[j],")))))))))))))))))))");
        
// //     if (arr[i] > arr[j]) {
// //         // console.log(arr[i][j],"*********************************");
// //         // 
// //       temp = arr[i];
// //       console.log(temp,"&&&&&&&&&&&&&&&&&&&&&&&&&&&");
// // //       
// //       arr[i] = arr[j];
// //       console.log(arr[i],"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    
// //       arr[j] = temp;
// //       console.log(arr[j],"))))))))&&&&&&&&&&&7))))))))))))))))");
// // //       
// //     }
// //   }
// // }
// // console.log("Sorted array=>", arr);


////////////////////////////////////////////////////////////////////////////
// // initialistion  
// // 1
// // setup state and props 


// mounting
// 3 // componentwillmount
// // render
// // componentdidmount

// // updation

// props 

// 5 // componentwillrecieve
// // shouldcomponentupdate
// // componentwillupdate
// // render
// // componentdidmount

// state
// // shouldcomponentupdate
// // componentwillUpdate
// // render
// // componentdidmount


// // unmounting 
// // componnetwillunmount

// function foo() {
//         let x = (y = 0);
        
//         x++;
        
//         y++;
        
//         return x;
//       }
      
//       console.log(foo());
//       console.log( typeof x);
//       console.log(typeof y);

///////////////////////////////////////////////////////////

// 10/30/2022 sunday dsa by Aman Sir

// You are given an array of 0s and 1s in random order. Segregate 0s on left side and 1s on right side of the array [Basically you have to sort the array]. Traverse array only once. 


// Input array   =  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 
// Output array =  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1] 


// 2Sum, 3Sum, sort 0 and 1, sort 0 ,1 and 2, remove duplicate elements.

// let obj ={
//   ob: {
//     j:"hema",
//     k:"mane"
//     }
    
// }


// console.log(obj.ob.j)




