function burgerBus(input) {
    let totalCities = Number(input.shift());

    let countCities = 0;
    let totalProfit = 0;

    for (let i = 0; i <= input.length - 3; i += 3) {

        countCities++;

        let cityName = input[i];
        let earnings = input[i + 1];
        let expense = input[i + 2];
        let cityProfit = 0;

        if (countCities % 3 == 0 && countCities % 5 != 0) {
            expense = 1.5 * expense;
        } else if (countCities % 5 == 0) {
            earnings = 0.9 * earnings;
        }

        cityProfit = earnings - expense;
        totalProfit += cityProfit;

        console.log(`In ${cityName} Burger Bus earned ${cityProfit.toFixed(2)} leva.`);
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}

burgerBus((["3",
    "Sofia",
    "895.67",
    "213.50",
    "Plovdiv",
    "2563.20",
    "890.26",
    "Burgas",
    "2360.55",
    "600.00"])
);

burgerBus(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])
