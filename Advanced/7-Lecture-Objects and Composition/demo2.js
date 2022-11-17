const myMap = {
    "John": "+1-555-1234",
    "Merry": "+1-555-4567",
    "Bob": "+1-555-7891",
};

for (const key in myMap) {
    console.log(key);
}

const person = { 
    name: "Peter",
    age: 23, 
    sayHi: function () {
        console.log(`${this.name} says hi!`);
    },
    sayBye
};

person.sayHi();


function sayBye () {
    console.log(`${this.name} says bye!`);
}
const personTwo = {
    name: "John",
    age: 50,
    sayBye
}

person.sayBye();
personTwo.sayBye();






