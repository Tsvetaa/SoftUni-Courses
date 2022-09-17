/*
function train (arr) {
    let passangersInWagons = arr.shift().split(" ").map(Number);
    let maxCapacity = Number(arr.shift());

    for (let command of arr) {
        let currentCommand = command.split(" ");

        if (currentCommand[0] == "Add") {
            passangersInWagons.push(Number(currentCommand[1]));
        } else {
            for (i = 0; i < passangersInWagons.length; i++) {
                if(passangersInWagons[i] + Number(currentCommand[0]) <= maxCapacity) {
                    passangersInWagons[i] += Number(currentCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(passangersInWagons.join(" "));
}

train (['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);


function distinctArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];
            if(currentElement == nextElement) {
                arr.splice(j, 1);
                j = j - 1;
            }
        }
    }
    console.log(arr.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 2, 4, 1, 2]);


function distinctArray(arr) {
    let newArr = [];
    for (let element of arr) {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    }
    console.log(newArr.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 2, 4, 1, 2]);


function houseParty(arr) {
    let list = [];
    for (let line of arr) {
        let elements = line.split(" ");
        let name = elements[0];
        if (elements.length == 3) {
            let isIncluded = list.includes(name);
            if (isIncluded) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        } else {
            let indexOfPerson = list.indexOf(name);
            if(indexOfPerson !== -1) {
                list.splice(indexOfPerson, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(list.join("\n"));
}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)
*/

function sorting(arr) {
    console.log()
    arr = arr.sort((a, b) => b - a);

    let newArr = [];

    while(arr.length > 0) {
        let bigestNum = arr.shift();
        newArr.push(bigestNum); 
        let smallestNum = arr.pop();
        newArr.push(smallestNum);
    }

    console.log(newArr.join(" "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);


