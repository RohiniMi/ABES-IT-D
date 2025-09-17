// let a = 13;
// console.log(a);
// {
//     let a = 43;
//     console.log(a);
// }

// console.log(a);

// var a = 13;
// console.log(a);
// {
//     var a = 43;
//     console.log(a);
// }



// let a = 13;
// console.log(a);
// {
//     let a = 43;
//     console.log(a);
// }

// function output(){
//     x=y=8;
// }
// output();
// console.log(typeof x);
// console.log(typeof y);


// console.log(typeof null);
// console.log(typeof NULL);
// console.log(typeof Null);
// console.log(typeof NaN);
// console.log(typeof undefined);

// let a = "235" - 23 + 23 + "1" - false + 23 - 235 + 235;
// console.log(a);

// let a = (true+false)>(2 + 3 + true);
// // 1>2 + 3 + true;
// console.log(a);

//pass by value
// let a = 34;
// console.log(a);
// function fun(a){
//     a = 30;
// }
// fun(a);
// console.log(a);

//pass by reference
let arr = [1,2,3,4,5];
function changeArr(a){
    a.push(6);
}
changeArr(arr);
console.log(arr);
