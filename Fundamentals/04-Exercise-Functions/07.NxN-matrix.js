/*
function matrix(number) {

    function row(number) {
        let row = []
        for (i = 0; i < number; i++) {
            row.push(number);
        }
        return row.join(" ");
    }

    let printRow = row(number);


    for (i = 0; i < number; i++) {
        console.log(printRow);
    }

}

matrix(3);


function perfectNumber(number) {

    function divisor(number) {
        let divisors = [];
        for (i = 1; i < number; i++) {
            if (number % i == 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }

    function sum(arr) {
        let sum = 0;
        for (i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    let foundDivisors = divisor(number);
    let foundSum = sum(foundDivisors);

    if (foundSum == number) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }

}

perfectNumber(1236498);
*/

function loadingBar (num) {

    function theBar (num) {
        let loadArr = [];

        for (i = 1; i <= (num / 10); i++) {
            loadArr.push('%');
        }

        for (j = (num / 10); j < 10; j++) {
            loadArr.push('.'); 
        }

        return loadArr;
    }

    let imageBar = theBar(num);

    if (num == 100) {
        console.log('100% Complete!')
    } else if (num > 0 && num < 100) {
        console.log(`${num}% [${imageBar.join("")}]`);
        console.log("Still loading...");
    } else {
        console.log("[%%%%%%%%%%]")
    }

}

loadingBar(30);
loadingBar(50);
loadingBar(100);
loadingBar();
