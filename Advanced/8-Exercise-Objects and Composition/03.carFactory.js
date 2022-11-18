function carFactory(car) {
    const newCar = {};

    newCar.model = car.model;

    if (car.power <= 90) {
        newCar.engine = { power: 90, volume: 1800 };
    } else if (car.power <= 120) {
        newCar.engine = { power: 120, volume: 2400 };
    } else {
        newCar.engine = { power: 200, volume: 3500 };
    };

    newCar.carriage = { type: car.carriage, color: car.color };

    if (car.wheelsize % 2 == 0) {
        car.wheelsize = car.wheelsize - 1;
    }
    newCar.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];

    return newCar;

}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})



function solve(wantedCar) {
    let engines = [{ power: 90, volume: 1800 },{ power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{type: 'hatchback', color: wantedCar.color}, {type: 'coupe', color: wantedCar.color}];
    let wheelsize = wantedCar.wheelsize % 2 == 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1; 

    return {
        model: wantedCar.model,
        engine: engines.filter( e => e.power >= wantedCar.power)[0],
        carriage: carriages.filter(c => c.type == wantedCar.carriage)[0],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})