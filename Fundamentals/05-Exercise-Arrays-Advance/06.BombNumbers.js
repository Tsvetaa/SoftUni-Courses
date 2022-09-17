/*
function bombNumbers(arr, bombDetails) {
    let bomb = bombDetails[0];
    let bombScope = bombDetails[1];

    let indexOfBomb = arr.indexOf(bomb);

    while (indexOfBomb !== -1) {
        let startExplosionIndex = Math.max(0, indexOfBomb - bombScope);
        let explosionLength = bombScope * 2 + 1;
        arr.splice(startExplosionIndex, explosionLength);
        indexOfBomb = arr.indexOf(bomb);
    }

    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    console.log(sum);

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);

*/

function searchNumber(arr, input) {
    let amountElements = input[0];
    let amountDeletedElements = input[1];
    let searchNumber = input[2];

    let newArr = arr.splice(0, amountElements);
    newArr = newArr.splice(amountDeletedElements);

    let count = 0;
    for (element of newArr) {
        if (element == searchNumber) {
            count++;
        }
    }

    console.log(`Number ${searchNumber} occurs ${count} times.`);

}

searchNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);