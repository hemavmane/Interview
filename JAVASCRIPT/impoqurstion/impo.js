console.log(null); //null;
console.log(+null); //0;
console.log(undefined); //undefined;
console.log(+undefined); //NaN
console.log(["a"] + ["b"] + ["c"]); // "abc"
console.log([] + []); // ""
console.log(![] + []); // "false", because
//  ![] returns false.
console.log(+false); //0
console.log(NaN); // NaN
console.log(+NaN); // NaN
console.log(+""); // 0
console.log(+null === 0); //true
console.log(!!1 === true); //true
console.log(Math.max()); //-Infinity
console.log(Math.min()); //Infinity
console.log(NaN == NaN); //false
console.log(typeof NaN.toString() === "string"); //true


