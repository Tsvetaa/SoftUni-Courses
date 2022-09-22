
function createStudent(name, grade) {
    let result = {
        speak() {
            console.log(`${this.name} says I am a student`);
        }
    };
    
    result.name = name; 
    result.grade = grade;
    result.speak();

    return result;
}

let myStudent = createStudent("Peter", "3.50");
console.log(myStudent);

let otherStudent = createStudent("John","4.00");
console.log(otherStudent);


class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    sayHi() {
        console.log(`${this.name} says Hi`)
    }
}

let newStudent = new Student("Tina", "5.00");
console.log(newStudent);
newStudent.sayHi();



class Cat {
    constructor(name, age) {
        this.name = name; 
        this.age = age; 
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

let someCat = new Cat("Fluffy", 3);
console.log(someCat);
someCat.meow();


 