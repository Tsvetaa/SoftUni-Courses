/*
function solveEmployees(input) {
    let listEmployees = {};
    for (let employee of input) {
        listEmployees.name = employee;
        listEmployees.pNum = employee.length;
        console.log(`Name: ${listEmployees.name} -- Personal Number: ${listEmployees.pNum}`);
    }

}

solveEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);


function solveEmployeesWithClass(input) {
    class Employee {
        constructor(name, personelNum) {
            this.name = name;
            this.personelNum = personelNum;
        }
        details() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personelNum}`);
        }
    }

    for (let employee of input) { 
        let currentEmployee = new Employee (employee, employee.length);
        currentEmployee.details();
    }
}

solveEmployeesWithClass([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);


function towns(input) {
    let townDetails = {};

    for (let element of input) {
        let token = element.split(" | "); 
        townDetails.town = token[0];
        townDetails.latitude = Number(token[1]).toFixed(2);
        townDetails.longitude = Number(token[2]).toFixed(2);

        console.log(townDetails);
    }
  
}


towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)


function store(availableStock, deliveredStock) {
    let storeProvision = {};


    for (let i = 0; i < availableStock.length; i += 2) {
        let currentProduct = availableStock[i];
        storeProvision[currentProduct] = Number(availableStock[i + 1]);
    }

    for (let i = 0; i < deliveredStock.length; i += 2) {
        let currentProduct = deliveredStock[i];

        if (!storeProvision.hasOwnProperty(currentProduct)) {
            storeProvision[currentProduct] = 0;
        }
        storeProvision[currentProduct] += Number(deliveredStock[i + 1]);
    }
    for (let product of Object.keys(storeProvision)) {
        console.log(`${product} -> ${storeProvision[product]}`);
    }
}

store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);


function movie(input) {
    let storeMovies = [];

    for (let i = 0; i < input.length; i++) {
        let token = input[i];
        if (token.includes("addMovie")) {
            let nameOfMovie = token.split("addMovie ")[1];
            storeMovies.push({ name: nameOfMovie });
        } else if (token.includes("directedBy")) {
            let info = token.split(" directedBy ");
            let name = info[0]
            let director = info[1];
            let movie = storeMovies.find((movieObj) => movieObj.name === name);
            if (movie) {
                movie.director = director;
            }

        } else if (token.includes("onDate")) {
            let info = token.split(" onDate ");
            let name = info[0]
            let date = info[1];
            let movie = storeMovies.find((movieObj) => movieObj.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let element of storeMovies) {
        if (element.name && element.director && element.date) {
            console.log(JSON.stringify(element));
        }
    }
}

movie([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])


function inventory(input) {
    let heros = [];
    for (let element of input) {
        let info = element.split(" / ");
        let hero = info[0];
        let level = info[1];
        let items = info[2].split(", ").join(", ");
        let currentHero = {
            hero,
            level,
            items,
        };
        heros.push(currentHero);
    }
    heros.sort((a, b) => a.level - b.level);
    for(let hero of heros) {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
*/

function dictionery(input) {

    let dictioneryBook = {};

    for (element of input) {
        let obj = JSON.parse(element);
        dictioneryBook = Object.assign(dictioneryBook, obj);
    }

    let sortKeys = Object.keys(dictioneryBook);
    sortKeys.sort();

    for (let term of sortKeys) {
        let definition = dictioneryBook[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }

}

dictionery([
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Tape":"NEW DEF."}',
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);


