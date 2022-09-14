function ladyBugs(arr) {

    let size = arr[0];
    let positions = arr[1].split(" ");
    let map = []

    for (let i = 0; i < size; i++) {
        map.push(0);
    }

    for (let i = 0; i < positions.length; i++) {
        if (Number(positions[i]) >= 0 && Number(positions[i]) < size) {
            let bugPosition = positions[i]
            map.splice(bugPosition, 1, 1);
        }
    }

    for (let j = 2; j < arr.length; j++) {

        let command = arr[j].split(" ");

        let bug = Number(command[0]);
        let direction = command[1];
        let step = Number(command[2]);
        let newBugPositon = 0;

        if (bug >= 0 && bug < size && map[bug] == 1) {

            if (direction == "right") {
                newBugPositon = bug + step;
            } else if (direction == "left") {
                newBugPositon = bug - step;
            }

            if (step !== 0) {
                while (map[newBugPositon] === 1) {
                    if (direction == 'right') {
                        newBugPositon += 1;
                    } else if (direction == 'left') {
                        newBugPositon -= 1;
                    }
                }
            }

            if (newBugPositon < size) {
                map[bug] = 0;
                map[newBugPositon] = 1
            } else if (newBugPositon >= size) {
                map[bug] = 0;
            }
        }
    }
    console.log(map.join(' '));
}

//ladyBugs([3, '0 1', '0 right 1', '2 right 1']);
//ladyBugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
//ladyBugs([5, '3', '3 left 2', '1 left -2']);
//ladyBugs([3, '0 1 2', '0 right  -3', '1 right -3', '2 right -3'])
ladyBugs([3, '0 1 2', '0 right 0', '1 right 0', '2 right 0']);