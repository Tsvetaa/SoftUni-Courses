function pirates(input) {
    let cities = {}

    for (let i = 0; i < input.length; i++) {

        while (input[i] !== "Sail") {
            let tokens = input.shift().split("||");
            let cityName = tokens[0];
            let townPopulation = Number(tokens[1]);
            let townGold = Number(tokens[2]);

            if (!cities[cityName]) {
                cities[cityName] = {
                    population: 0,
                    gold: 0
                }
            }

            cities[cityName].population += townPopulation;
            cities[cityName].gold += townGold;
        }

        while (input[i] != "End") {
            let line = input.shift().split("=>");
            let event = line[0];
            let town = line[1];

            if (event == "Plunder") {
                let people = Number(line[2]);
                let goldS = Number(line[3]);

                cities[town].population -= people;
                cities[town].gold -= goldS;

                console.log(`${town} plundered! ${goldS} gold stolen, ${people} citizens killed.`);

                if (cities[town].population <= 0 || cities[town].gold <= 0) {
                    delete cities[town];
                    console.log(`${town} has been wiped off the map!`);
                }

            } else if (event == "Prosper") {
                let goldA = Number(line[2]);
                if (goldA < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    cities[town].gold += goldA
                    console.log(`${goldA} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`)
                }
            }
        }

        if (input[i] == "End") {

            let count = Object.keys(cities).length;

            if (count == 0) {
                console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
            } else {
                console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);

                for (let cityData of Object.entries(cities)) {
                    let name = cityData[0];
                    let goldPrint = cityData[1].gold;
                    let popPrint = cityData[1].population;

                    console.log(`${name} -> Population: ${popPrint} citizens, Gold: ${goldPrint} kg`);
                }
            }
        }
    }
}



pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);

console.log("===============");

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])


