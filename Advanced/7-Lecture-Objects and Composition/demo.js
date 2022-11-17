const person = { 
    name: "Peter",
    age: 23,
    'job tittle': 'artist'
};

/// access property
console.log(person.name);
///change property
person.name = "John";

/// add new property
person.lastName = "Jackson";
console.log(person);

/// access with index / or with variable the value 
console.log(person["age"]);
const propName = "age";
console.log(person[propName]);

/// change value by index with variable 
person[propName] = 24; 
console.log(person);

/// destructuring object
const {age, name} = person; 
console.log(name);
console.log(age);

/// delete properties
delete person.age; 
delete person["job tittle"];
console.log(person);