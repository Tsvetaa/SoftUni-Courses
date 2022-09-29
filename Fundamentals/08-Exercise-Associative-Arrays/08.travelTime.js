function travelTime (input) {
    let destinations = {}; 
    for (let line of input) {
        let [country, city, price] = line.split(" > ");
        if (destinations.hasOwnProperty(country) == false) {
            destinations = new Map(country);
        }
        
        if (destinations.has(city)) {
            
        }
        destinations[country].add([city, price]);
    }

    let sorted = Object.entries(destinations);
    sorted.sort();

    for (let [country, obj] of sorted) {
        console.log(country);
        for (let [city, price] of obj) {
            console.log(city + "->" + price);
        }
    }

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);