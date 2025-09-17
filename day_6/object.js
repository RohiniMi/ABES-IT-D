const student = {
    name : "XYZ",
    rollno : 234,
    email: {
        email1: "XYZ@gmail.com",
        email2: "xyz234@gmail.com"
    },
    phoneNo: 9987653689,
    lang:{
        lang1: "JS",
        lang2: "TS",
        lang3: "Java"
    }
}
// console.log(student.name);
// console.log(student.email['email2']);
// console.log(student.phoneNo);
// console.log(student['lang']['lang1']);
//student 2
const student2 = Object.assign({},student);
console.log("properties of student 1 before change");

console.log(student.name);
console.log(student.email['email2']);
console.log(student.phoneNo);
console.log(student['lang']['lang1']);

student2.name = "abc";
student2.email['email2'] = "abc234@gmail.com";
student2.phoneNo = 9876598765;
student2['lang']['lang1'] = "C++";

console.log("properties of student 1 after change");

console.log(student.name);
console.log(student.email['email2']);
console.log(student.phoneNo);
console.log(student['lang']['lang1']);



