/*
function firstLastKNum (arr) {
    let k = arr.shift()
    let firstArr = arr.slice(0,k);
    let lastArr = arr.slice(-k);

    console.log(firstArr.join(" "));
    console.log(lastArr.join(" "));

}

firstLastKNum([2,7, 8, 9]);


function sumLastKNum(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let lastK = result.slice(-k);

        let sum = 0;

        for (let element of lastK) {
            sum += element;
        }
        result.push(sum);

    }

    console.log(result.join(" "));
}

sumLastKNum(6, 3);
sumLastKNum(8, 2);
sumLastKNum(9, 5);


function processOddNum(arr) {
    let filteredOddNum = arr.filter((x, i) => i % 2 == 1);
    let doubled = filteredOddNum.map(x => x * 2);
    let result = doubled.reverse();

    console.log(result.join(" "));

}

processOddNum([10, 15, 20, 25]);
processOddNum([3, 0, 10, 4, 7, 3]);


function processOddNum(arr) {
    console.log(
        arr
            .filter((x, i) => i % 2 == 1)
            .map(x => x * 2)
            .reverse()
            .join(" ")
    );

}

processOddNum([10, 15, 20, 25]);
processOddNum([3, 0, 10, 4, 7, 3]);

function smallestTwoNum(arr) {
    return arr.sort((a, b) => a - b).slice(0, 2).join(" ");
}


console.log(smallestTwoNum([30, 15, 50, 5])); 
console.log(smallestTwoNum([3, 0, 10, 4, 7, 3]));


function listOfProducts(arr) {
    let sorted = arr.sort();
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }

}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);
*/

function arrayManipulations(input) {
    let arr = input.shift().split(" ").map(Number);

    for (let element of input) {
        let [command, firstNum, secondNum] = element.split(" ");

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add": add(firstNum);
                break;
            case "Remove": remove(firstNum);
                break;
            case "RemoveAt": removeAt(firstNum);
                break;
            case "Insert": insertAt(firstNum, secondNum);
                break;
        }

        function add(el) {
            arr.push(el);
        }

        function remove(num) {
            arr = arr.filter(el => el != num);
        }

        function removeAt(index) {
            arr.splice(index, 1);
        }

        function insertAt(num, index) {
            arr.splice(index, 0, num);
        }
    }

    console.log(arr.join(" "));

}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);