function reception(input) {
    let arr = input.map(Number);

    let loadPerHour = arr[0] + arr[1] + arr[2];
    let totalStudents = arr[3];
    let time = 0;

    while (totalStudents > 0) {
        time++;
        if (time % 4 != 0) {
            totalStudents -= loadPerHour;
        }

    }

    console.log(`Time needed: ${time}h.`);
}

reception(['5', '6', '4', '20']);
reception(['1', '2', '3', '45']);
reception(['3', '2', '5', '40']);