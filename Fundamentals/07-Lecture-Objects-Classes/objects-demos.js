let person = {
    name: 'Peter',
    age: 20
};

console.log(person.name);

person.age++;
console.log(person.age);

person['age'] = 25;
console.log(person['age']);

let propertyName = 'age';
console.log(person[propertyName]);

console.log(person["a" + "ge"]);


function personInfo(firstName, lastName, age) {
    let result = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    return result;
}
console.log(personInfo("Peter", "Pan", 20));

function personInfoTwo(firstName, lastName, age) {
    let result = {};
    result.firstName = firstName,
        result.lastName = lastName,
        result.age = age

    return result;
}
console.log(personInfoTwo("Tina", "Pan", 32));

function personInfoThree(firstName, lastName, age) {
    let result = {
        firstName,
        lastName,
        age
    };

    return result;
}
console.log(personInfoThree("Dylan", "Pan", 32));

function personInfoFour(firstName, lastName) {
    let result = {
        firstName,
        lastName,
        age: 40
    };

    return result;
}
console.log(personInfoFour("Dylan", "Pan"));


let personGreeting = {
    name: "Tina",
    lastNmae: "Turner",
    sayHi: function () {
        console.log("Hello!");
    }
};

personGreeting.sayHi();

let personGreetingTwo = {
    name: "Tina",
    lastNmae: "Turner",
    sayHi() {
        console.log("Hello!");
    }
};

personGreetingTwo.sayHi();

let personGreetingThree = {
    name: "Tina",
    lastNmae: "Turner",
    sayHi: () => console.log("Hello!")
};

personGreetingThree.sayHi();

let personGreetingFour = {
    name: "Tina",
    lastNmae: "Turner"
};

personGreetingFour.sayHi = function () {
    console.log("Hello");
};

personGreetingFour.sayHi();

let personGreetingFive = {
    name: "Tina",
    lastNmae: "Turner"
};

personGreetingFive['sayHi'] = function () {
    console.log("Hello");
};

personGreetingFive.sayHi();

personGrades = {
    name: "Peter",
    age: 20,
    grades: [4, 6, 3.5, 5]

}

console.log(personGrades.name + " Has grade:");
console.log(personGrades.grades[3].toFixed(2).split());

let keys = Object.keys(personGrades);

for(let key of keys) {
    console.log(personGrades[key]);
    console.log(key, personGrades[key]);
}




