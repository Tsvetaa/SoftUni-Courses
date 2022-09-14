function arrayRotation(arr, n) {
    let newArr = [];

    if (n > arr.length) {
        n = n % arr.length
    }
    for (j = n; j < arr.length; j++) {
        newArr.push(arr[j]);
    }
    for (i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr.join(' '));

}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);
