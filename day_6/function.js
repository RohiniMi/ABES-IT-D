//function in js
// function keyword (hoisted)
// console.log(fun); //1.[Function: fun]
// function fun(){
//     console.log("FSD Class!");  //2. FSD Class!
//     // return 0;
// }
// console.log(fun()); // 3. undefined

// 2. function as expression
// const a = function b(){
//     console.log("FSD Class!");
// }
// console.log(a);
// console.log(a());
// console.log(b);

// 3. arrow functions (not hoisted)
// console.log(a);// generate error
// const a = ()=>{
//     console.log("FSD Class!");
// }
// console.log(a());

(()=>{
    console.log("hello");  
})();
