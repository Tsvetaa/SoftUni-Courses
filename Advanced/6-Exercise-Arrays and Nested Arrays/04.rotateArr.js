function rotateArr(arr, times) {

    for (let i = 0; i < times; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(" "));

}

rotateArr(['1',
    '2',
    '3',
    '4'],
    2
);