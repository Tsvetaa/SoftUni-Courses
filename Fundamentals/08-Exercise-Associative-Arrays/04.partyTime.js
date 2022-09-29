function partyTime(input) {
    let vipList = new Set();
    let regularList = new Set();


    while (input[0] != "PARTY") {
        let guest = input.shift();
        if (Number.isNaN(Number(guest[0]))) {
            regularList.add(guest);
        } else {
            vipList.add(guest);
        }
    }

    for (let guest of input) {
        vipList.delete(guest);
        regularList.delete(guest);
    }
    console.log(vipList.size + regularList.size);
    for (let guest of vipList) {
        console.log(guest);
    }
    for (let guest of regularList) {
        console.log(guest);
    }
}





partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);