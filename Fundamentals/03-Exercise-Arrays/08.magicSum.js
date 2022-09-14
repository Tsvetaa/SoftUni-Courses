function magicSum(arr, n) {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        sum = 0;
        for (let j = i + 1; j <= arr.length; j++) {
            sum = arr[i] + arr[j];
            if (sum == n) {
                console.log(arr[i] + " " + arr[j]);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);