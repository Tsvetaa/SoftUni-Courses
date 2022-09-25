function addressBook(input) {
    let result = {};

    for(let line of input) {
        let [name, address] = line.split(":");

        result[name] = address;
    }

    let sorted = Object.entries(result);
    sorted.sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB);
    });

    for (let [name, address] of sorted) {
        console.log(name, "->", address)
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);

function addressBook(input) {
    let result = {};

    for(let line of input) {
        let [name, address] = line.split(":");

        result[name] = address;
    }

    let sorted = Object.entries(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sorted) {
        console.log(name, "->", address)
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);


function addressBook(input) {
    let result = {};

    for(let line of input) {
        let [name, address] = line.split(":");

        result[name] = address;
    }

    let sortedKeys = Object.keys(result);
    sortedKeys.sort((a, b) => a[0].localeCompare(b[0]));

    for (let name of sortedKeys) {
        console.log(name, "->", result[name]);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);