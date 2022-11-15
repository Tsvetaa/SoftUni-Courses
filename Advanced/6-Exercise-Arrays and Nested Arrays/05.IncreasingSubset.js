function increasingSubset(arr) {
    let newArr = [];
    let bigNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= bigNum) {
            newArr.push(arr[i]);
            bigNum = arr[i];
        }
    }
    return newArr;
}

console.log(increasingSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))