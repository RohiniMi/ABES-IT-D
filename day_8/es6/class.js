const student1 = {
    name: "abc",
    age: 20,
}
const student2 = {
    name: "xyz",
    age: 22,
}

class Student{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    greet(){
        console.log(`Hello I am ${this.name} and I am ${this.age} years old`);
    }

}
const student3 = new Student("pqr",21);
student3.greet();