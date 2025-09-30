const fun = () => {
    console.log("hey");
}
fun();

//arrow function with rest paramaeter
const sum = (...args) => {
    console.log(args);
    let sum = 0;
    args.forEach((ele)=>{
      sum += ele ;
    })
    return sum;
}
const op = sum(2, 4, 6, 8, 10, 12, 14);
console.log(op);

