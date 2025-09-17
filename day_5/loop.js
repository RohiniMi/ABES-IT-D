//pattern program
//for(;;)
let row = 4;
for (let i = 1; i <= row; i++) {
    let line = "";
    for (let j = 1; j <= 2 * row - 1; j++) {
        if (i + j > row && j - i <= row - 1) {
            line += "*";
        } else {
            line += " ";
        }
    }
    // console.log(line);
}

//for in loop
// for (i in arr) {
//     console.log(arr[i]);
// }

// for (i of arr) {
//     console.log(i);
//     console.log(arr.length);
// }
// console.log(arr[5][0]);
//foreach loop
// let arr = [1, 2, 3, 4, 5, ['2', '3', '4', '5']];
// arr.forEach((i) => console.log(i))
{/* <condition>? <>true</>: <>false</> */}

let a = 4;
console.log("value of a ",a);
console.log("value of a after increment: ",a++);
console.log("value of a ",a);
console.log("value of a ",a--);
console.log("value of a ",a);



