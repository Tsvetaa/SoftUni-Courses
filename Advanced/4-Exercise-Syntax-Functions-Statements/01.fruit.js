function fruit(name, weightGr, priceKg) {
    let weightKg = weightGr / 1000; 
    let price = weightKg * priceKg;

    console.log(`I need $${price.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${name}.`);
}

fruit ('orange', 2500, 1.80);