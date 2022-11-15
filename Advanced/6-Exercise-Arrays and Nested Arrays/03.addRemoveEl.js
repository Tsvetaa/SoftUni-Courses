function addRemoveEl(arr) {
    let newArr = [];
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num++;
        let command = arr[i];
        if (command == "add") {
            newArr.push(num);
        } else if (command == "remove") {
            newArr.pop(num);
        }
    }
    if (newArr.length == 0) {
        console.log("Empty");
    } else {
        console.log(newArr.join("\n"))
    }

}

addRemoveEl(['add',
    'add',
    'remove',
    'add',
    'add']);
