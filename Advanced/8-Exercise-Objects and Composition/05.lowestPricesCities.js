function lowestPrice(arr) {
    const result = {};

    for (const element of arr) {
        let [city, product, price] = element.split(" | ");
        price = Number(price);

        if (result[product] == undefined) {
            result[product] = {
                price,
                city
            }
        } else {
            if (result[product].price > price) {
                result[product].price = price;
                result[product].city = city; 
            }

        }

    }

    for (let product in result) {
        console.log(`${product} -> ${(result[product].price)} (${(result[product].city)})`);
    }

}

lowestPrice(["Sofia City | Audi | 100000",
    "Sofia City | BMW | 10000000",
    "Mexico City | BMW | 99999",
    "Mexico City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Washington City | Mercedes | 1000"]);