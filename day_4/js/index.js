// output method
// console.log("FSD Class");

//input method
// let a = prompt("enter a number: ");
// console.log(a);

// var a = 20;
// var a = 30; //can be redeclare


// let b = 40;
// console.log("after first assignment of b's value: "+ b);
// b = 70;
// console.log("after Reassignment of b's value: "+ b);
// {
//   let name = "Rohini";
//   name = "XYZ";
//   console.log("name: "+ name);
//   b= 60;
//   console.log("after Reassignment of b's value: "+ b);
// }
// // console.log("name: "+ name);

// const pi = 3.14;

// strings
//Hello, Rohini Mittal!
let firstName = "Rohini";
let lastName = "Mittal";
let message = "Hello";
let outputMessage = message + ", " + firstName + " " + lastName + "!";
// console.log(outputMessage);

let sum = 2 - 2 + "22";
// console.log(sum);
//typechecking
// console.log(typeof(sum));

//implicit type 
// string to number
let op = "22" - 2;
console.log(op + " type of op: " + typeof (op));

let strToNum = "hey" - 2;
console.log(strToNum + " " + typeof (strToNum));

const student = [{
    rollno: 234,
    firstName: "Rohini",
    lastName: "Mittal",
},
{
    rollno: 235,
    firstName: "XYZ",
    lastName: "Mittal",
}
]
console.log(typeof (student));
console.log(student[0]['firstName']);



