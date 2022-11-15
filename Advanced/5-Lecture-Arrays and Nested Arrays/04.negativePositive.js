function negativePositive(input) {
    const result = []
    for (let num of input) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    console.log(result.join("\n"));

}

negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);