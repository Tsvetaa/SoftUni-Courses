function minerTask(input) {
    let miner = new Map();
    for (let i = 0; i <= input.length -1; i += 2) {
        let type = input[i];
        let amount = Number(input[i + 1]);

        if (miner.has(type) == false) {
            miner.set(type, amount);
        } else {
            let currentAmount = miner.get(type);
            miner.set(type, currentAmount + amount);
        }
    }

    for (let [type, amount] of miner) {
        console.log(type + " -> " + amount);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    
]);