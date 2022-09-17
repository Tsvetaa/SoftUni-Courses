function arrayManipulator(arr, commands) {
    for (let commandLine of commands) {
        let command = commandLine.split(" ");
        let currentCommand = command[0];

        if (currentCommand == "add") {
            let number = Number(command[2]);
            let index = Number(command[1]);

            arr.splice(index, 0, number);

        } else if (currentCommand == "addMany") {
            let index = command[1];
            let arrToInsert = command.slice(2, command.length);
            arrToInsert = arrToInsert.map(Number);

            for (let i = arrToInsert.length - 1; i >= 0; i--) {
                let currentNumToAdd = arrToInsert[i];
                arr.splice(index, 0, currentNumToAdd);
            }

        } else if (currentCommand == "contains") {
            let element = Number(command[1]);
            console.log(arr.indexOf(element));

        } else if (currentCommand == "remove") {
            let index = Number(command[1]);
            arr.splice(index, 1);

        } else if (currentCommand == "shift") {
            let positions = Number(command[1]);

            for (i = 0; i < positions; i++) {
                let element = arr[i];
                arr.push(element);
                arr.shift();
            }

        } else if (currentCommand == "sumPairs") {

            let newArr = []
            if (arr.length % 2 != 0) {
                arr.push(0);
            }
            for (let i = 0; i < arr.length - 1; i += 2) {
                newArr.push(arr[i] + arr[i + 1]);
            }
            arr = newArr;

        } else if (currentCommand == "print") {
            console.log(`[ ${arr.join(", ")} ]`)
        }

    }

}
arrayManipulator([1, 2, 4, 5, 6, 7, 8],
    ['print']
);