function piccolo(input) {
    let result = new Set();

    for (let line of input) {
        let [direction, numCar] = line.split(", ");

        if (direction == "IN") {
            result.add(numCar);
        } else {
            result.delete(numCar);
        }
    }
    if (result.size == 0) {
        console.log("Parking Lot is Empty");
    } else {
        let parking = Array.from(result);
        parking.sort();
        for (let car of parking) {
            console.log(car);
        }
    }
}

function piccoloMap(input) {
    let result = new Map();

    for (let line of input) {
        let [direction, numCar] = line.split(", ");

        if (direction == "IN") {
            result.set(numCar, 1);
        } else {
            result.delete(numCar);
        }
    }
    if (result.size == 0) {
        console.log("Parking Lot is Empty");
    } else {
        let parking = Array.from(result.keys()).sort();
        for (let car of parking) {
            console.log(car);
        }
    }
}

piccoloMap(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);