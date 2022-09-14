function maxNumber(arr) {
    let maxArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let isMax = true; 

        for (let j = i + 1; j < arr.length; j++) {
            let nextElelemnt = arr[j];

            if (currentElement <= nextElelemnt) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            maxArr.push(currentElement);
        }
    }

    console.log(maxArr.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]); 
