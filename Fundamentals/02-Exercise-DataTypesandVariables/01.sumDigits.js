function sumDigits (n) {
    let sum = 0;
    toText = String(n);
    
    for(let i = 0; i < toText.length; i++) {
        sum += Number(toText[i]);
    }
    console.log(sum);

}

sumDigits(245678);