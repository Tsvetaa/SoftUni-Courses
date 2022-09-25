function storage(input) {
    let result = new Map();

    for (let line of input) {
        let [product, qty] = line.split(" ");
        qty = Number(qty);

        if (result.has(product)) {
            let existing = result.get(product);
            result.set(product, qty + existing);
        } else {
            result.set(product, qty);
        }
    }
    for (let [product, qty] of result) {
        console.log(product, "->", qty);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);

function storageTwo(input) {
    let result = new Map();

    for (let line of input) {
        let [product, qty] = line.split(" ");
        qty = Number(qty);

        let existing = 0;
        if (result.has(product)) {
            existing = result.get(product);
        }

        result.set(product, qty + existing);

    }
    for (let [product, qty] of result) {
        console.log(product, "->", qty);
    }
}

storageTwo(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);

function storageThree(input) {
    let result = new Map();

    for (let line of input) {
        let [product, qty] = line.split(" ");
        qty = Number(qty);

        if (!result.has(product)) {
            result.set(product, 0);
        }
        let existing = result.get(product);
        result.set(product, qty + existing);

    }
    for (let [product, qty] of result) {
        console.log(product, "->", qty);
    }
}

storageThree(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);