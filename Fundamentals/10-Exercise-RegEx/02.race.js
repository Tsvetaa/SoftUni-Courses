function race(input) {
    let racers = {};
    let participants = input.shift().split(", ");

    for (let line of input) {
        if (line != "end of race") {

            let name = line.match(/[A-Z]+/gi).join("");
            let distanceNum = line.match(/\d/g);
            let distance = 0;
            for (let num of distanceNum) {
                distance += +num;
            }
            if (participants.includes(name)) {
                if (racers.hasOwnProperty(name)) {
                    racers[name] += distance;
                } else {
                    racers[name] = distance;
                }
            }
        }

    }

    let sortedArray = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
    console.log(`1st place: ${sortedArray[0]}\n2nd place: ${sortedArray[1]}\n3rd place: ${sortedArray[2]}`);

}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);


function raceTwo(input) {
    let racers = {};
    let participants = input.shift().split(", ");

    for (let line of input) {
        if (line != "end of race") {

            let name = line.match(/[A-Z]+/gi).join("");
            let distanceNum = line.match(/\d/g);
            let distance = 0;
            distance = distanceNum
                .map(Number)
                .reduce((previousValue, currentValue) => previousValue + currentValue);
        
            if (participants.includes(name)) {
                if (racers.hasOwnProperty(name)) {
                    racers[name] += distance;
                } else {
                    racers[name] = distance;
                }
            }
        }

    }

    let sortedArray = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
    console.log(`1st place: ${sortedArray[0]}\n2nd place: ${sortedArray[1]}\n3rd place: ${sortedArray[2]}`);

}

raceTwo(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);