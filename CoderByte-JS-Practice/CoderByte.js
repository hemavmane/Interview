// let input = ''
// console.log(input)

// function input(str){
//    return  str.split("").reverse().join("")
// }

// console.log(input('coderbyte'))


// function input(str){
//     let string=''
//    for(let i=0; i<str.length; i++){
//         // console.log(i,str[i])
//        string += str[i].reverse()
//    }
//    return string
//  }
 
//  console.log(input('i love code'))
 
// function factorial(num){
// let facto =1
//    for(let i=1; i<=num; i++){
//     console.log(i,num)
//        facto*=i
//       //  console.log(facto*=i,"facto",i,"i",num,"num")
//    }
//    return facto
// }
// // factorial(5)
// console.log(factorial(5))



// function factorial(num){
//  if(num<0) return NaN
//  return (num>1) ? factorial(num-1)*num:1
// }
// console.log(factorial(5))

// function word(name){
//   // console.log(name)
//   let arr =name.split(" ")
//   // console.log(arr)
//   let max="";
//   for(let i=0; i<arr.length; i++){
//     console.log(i,arr[i])
  
//     if(max.length<arr[i].length ){
//       // console.log(arr[0].length)
//          max=arr[i]
//     }
//   }
//   return max

// }
// console.log(word('i love! code'))



// function longestWord(string){
//   return string.match(/[a-zA-Z]+/g)
//              .reduce(function(a,b){
//                   return a.length>=b.length?a:b;
//              })
// }
// console.log(longestWord('i love! code'))

// // // 53
// function LongestWord(sen) { 
//   return sen.match(/w+/g).reduce((item, next) =>  item.length >= next.length ? item : next);  
// }
   
// // keep this function call here 
// console.log(LongestWord('i love@! time'))













// function FindIntersection(strArr) { 
//   // let arr=[]
// for(let i=0; i<strArr.length; i++){

//   for(let j=i+1; j<strArr[i].length; j++){
//      console.log("first")
//     // if(strArr[i]===strArr[j]){
//     //   // console.log(strArr[i])
//     //    arr.push(strArr[i])
//     // }
//   }

// }

// }
   
// // keep this function call here 
// console.log(FindIntersection((["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])));




// first factorial
// function factorial(num){
//     // console.log(num,"num")
//     if(num<1){
//         return 1
//     }else
//     if(num>1){
//         // console.log(factorial(num-1)*num,"facto")
//         //when num=5: (5-1)*5=20
//            //when num=4: (4-1)*4 =12
//            //when num=3: (3-1)*3=6
//            //when num=2: (2-1)*2=2
//            //when num=1: (1-1)*1=1
//         //    120
//   return   factorial(num-1)*num
 
//     }else{
//         return 1
//     }

// }

// console.log(factorial(5))


// function factorial(num){
//     let facto=1;
//     for(let i=1; i<=num; i++){
//         facto*=i
//     }
//     return facto
// }

// console.log(factorial(5))

function longestword(str){
    let char ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    longestwordp=''
    let maxlength=0;

    for(let i=0; length=0, word=0, i<str.length; i++){
        let c =str[i]
             if(char.includes(c)){
                length++
                word+=c
                console.log(word)
             }
    }
}

console.log(longestword("i love!!$ code"))




