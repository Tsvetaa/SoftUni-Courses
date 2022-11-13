function largest(a, b, c) {
    let result;

    if (a >= b && a >= c) {
        result = a;
    } else if (b >= a && b >= c) {
        result = b;
    } else if (c >= b && c >= a) {
        result = c;
    }

    console.log(`The largest number is ${result}.`); 
}

function largestTwo(a, b, c) {
    let result; 
    result = Math.max(a, b, c);
    console.log(`The largest number is ${result}.`); 
}

largest(5, 7, 10);
largestTwo(1, 2, 3);