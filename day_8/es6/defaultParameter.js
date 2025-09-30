const add = (a,b,c=0)=>{
    return a+b+c;
}
add(1,2,3);

const greet = (fname,lname,mname="")=>{
 console.log(`Hello ${fname} ${mname} ${lname}`);
}
greet('first','last');