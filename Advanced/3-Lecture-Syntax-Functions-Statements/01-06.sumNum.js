function sumNum(n, m) {
    let num1 = Number(n);
    let num2 = Number(m);
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    console.log(sum);
}

sumNum('1', '5');
sumNum('-8', '20');