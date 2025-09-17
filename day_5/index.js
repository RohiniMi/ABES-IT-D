console.log(a,"a: before initialization");
var a = 30;
console.log(message("Hello FSD Class!"), "invokation of function");


function message(msg){
    console.log(msg);  
}

//explicit type conversion
// Number()
let strToNum = Number("hello");
console.log( strToNum+ " "+typeof(strToNum));

let numToStr = String(1234);
console.log(numToStr+ " "+ typeof(numToStr));

let numToBool = Boolean(.8);
console.log(numToBool);
//for(;;)
for(let i=1;i<=6;i=i+2){
}




