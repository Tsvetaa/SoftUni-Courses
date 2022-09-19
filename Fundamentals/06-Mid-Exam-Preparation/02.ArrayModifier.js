function arrayModifier(input) {
    let arrayInput = input.shift().split(" ");
    let array = arrayInput.map(Number);

    for (let i = 0; i < input.length; i++) {
        let commandLine = input[i].split(" ");
        let command = commandLine[0];

        if (command == "swap") {
            let indexOne = commandLine[1];
            let indexTwo = commandLine[2];

            let elOne = array[indexOne];
            let elTwo = array[indexTwo];

            array.splice(indexOne, 1, elTwo);
            array.splice(indexTwo, 1, elOne);

        } else if (command == "multiply") {
            let indexOne = commandLine[1];
            let indexTwo = commandLine[2];

            let elOne = array[indexOne];
            let elTwo = array[indexTwo];

            array.splice(indexOne, 1, elOne * elTwo);

        } else if (command == "decrease") {
            array = array.map(x => x - 1);

        } else if (command == "end") {
            break;
        }
    }
    console.log(array.join(", "));
}


arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]  
);