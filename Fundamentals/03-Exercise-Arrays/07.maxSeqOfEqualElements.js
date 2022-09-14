function maxSeq(arr) {
    let seqArr = [];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = [];

        for (let j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                newArr.push(arr[j]);
            } else {
                break;
            }

            if (newArr.length > seqArr.length) {
                seqArr = newArr
            }
        }
    }
    console.log(seqArr.join(" "));
}
maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSeq([1, 1, 1, 2, 3, 1, 3, 3]);
maxSeq([4, 4, 4, 4]);
maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3]);
