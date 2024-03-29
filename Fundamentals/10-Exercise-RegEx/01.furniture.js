function furniture(input) {
    let sum = 0;

    console.log("Bought furniture:");
    for (let line of input) {
        if (line == "Purchase") {
            break;
        }
        let regex = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/;
        let result = regex.exec(line);
        if (result) {
            console.log(result.groups.name);
            sum += +result.groups.price * +result.groups.quantity;
            
        }
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
);