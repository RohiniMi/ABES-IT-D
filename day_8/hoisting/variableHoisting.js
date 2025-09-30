console.log(a);
var a; //hoisting is possible with var
a = 10;
console.log(a);


console.log(b); //error
let b; //hoisting is not possible with let and const
b = 20;
console.log(b);
