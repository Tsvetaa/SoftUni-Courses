function towns(list) {
    const result = {};

    for (const town of list) {
        const tokens = town.split(" <-> ");
        const name = tokens[0];
        const pop = Number(tokens[1]);

        if (result[name] == undefined) {
            result[name] = pop;
        } else {
            result[name] += pop;
        }
    }
    for (let town in result) {
        console.log(`${town} : ${(result[town])}`);
    }
}

towns(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)


function townsTwo(list) {
    const result = {};

    for (const town of list) {
        const tokens = town.split(" <-> ");
        const name = tokens[0];
        const pop = Number(tokens[1]);

        if (result[name] != undefined) {
            pop += result[name]
        }
        result[name] = pop;

    }
    for (let [name, pop] of Object.entries(result)) {
        console.log(`${name} : ${pop}`);
    }
}

townsTwo(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)