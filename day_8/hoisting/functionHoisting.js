f1();
function f1(){
    console.log("from the function with 'function keyword'"); 
}
f1();
//non-hoisted functions
// functionAsExpression(); // error
const functionAsExpression = function(){
    console.log("from the function with 'function expression'");
}
functionAsExpression();

arrowFunction();
const arrowFunction = ()=>{
    console.log("from the function with 'arrow function'");  
}
arrowFunction();
