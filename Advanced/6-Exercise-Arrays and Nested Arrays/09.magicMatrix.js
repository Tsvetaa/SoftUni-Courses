function magicMatrix(matrix) {
    let isMagical = true;

    for (let i = 0; i < matrix.length - 1; i++) {
        let sumRowOne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRowTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumColOne = 0;
        let sumColTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumColOne += matrix[i][j];
            sumColTwo += matrix[i + 1][j];
        }

        if (sumRowOne != sumRowTwo || sumColOne != sumColTwo) {
            isMagical = false;
        }
    }
    return isMagical
}

console.log(magicMatrix([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
))


function magicMatrixTwo(matrix) {

    let rowSize = matrix[0].length;
   


    for (let ri = 0; ri < matrix.length - 1; ri++) {
        
        let sumRowOne = 0;
        let sumRowTwo = 0;
        let sumColOne = 0;
        let sumColTwo = 0;

        for (let ci = 0; ci < rowSize; ci++) {

            sumRowOne += matrix[ri][ci];
            sumRowTwo += matrix[ri + 1][ci];
            sumColOne += matrix[ri][ci];
            sumColTwo += matrix[ri][ci + 1];
        }

    }

    if (sumRowOne != sumRowTwo || sumColOne != sumColTwo) {
        console.log(false)
    } else {
        console.log(true)
    }

}



magicMatrixTwo([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);