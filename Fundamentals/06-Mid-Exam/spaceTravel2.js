function spaceTravel(input) {
    let ammunitions = Number(input.pop());
    let fuel = Number(input.pop());

    let tokens = input.shift().split("||");
    let arrayToCut = tokens;
    let L = tokens.length;
   

   for (let i = 0; i < L; i++) {
   
        let commandLine = arrayToCut.shift().split(" ");
        let command = commandLine[0];

        if (command == "Travel") {
            let distance = Number(commandLine[1]);
            if (distance <= fuel) {
                fuel -= distance;
                console.log(`The spaceship travelled ${distance} light-years.`);
            } else {
                console.log("Mission failed.");
                break;
            }

        } else if (command == "Enemy") {
            let enemyArmour = Number(commandLine[1]);
            if (enemyArmour <= ammunitions) {
                ammunitions -= enemyArmour;
                console.log(`An enemy with ${enemyArmour} armour is defeated.`);
            } else if (fuel >= 2 * enemyArmour) {
                fuel = fuel - 2 * enemyArmour;
                console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
            } else {
                console.log("Mission failed.");
                break;
            }

        } else if (command == "Repair") {
            let repair = Number(commandLine[1]);
            fuel += repair;
            ammunitions += repair * 2;

            console.log(`Ammunitions added: ${repair * 2}.`);
            console.log(`Fuel added: ${repair}.`);
        } else if (command == "Titan") {
            console.log("You have reached Titan, all passengers are safe.");
        }

    }

}


spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ])


