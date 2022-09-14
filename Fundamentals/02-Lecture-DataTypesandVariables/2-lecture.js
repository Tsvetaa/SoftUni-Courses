/*
function echoType (param) {
    const type = typeof(param);

    console.log(`${type}`);

    if(type == 'string' || type == 'number') { 
        console.log(`${param}`);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType (null);

function concatenateNames(name1, name2, delimiter) {
    console.log(`${name1}${delimiter}${name2}`)
}

concatenateNames('John',
'Smith',
'->'
)

function rightPlace(string1, char, string2) {
    let result = string1.replace('_', char);
    let check = result === string2 ? "Matched" : "Not Matched";
    console.log(check);
}

function rightPlace(string1, char, string2) {
    let result = '';
    for (let i = 0; i < string1.length; i++) {
        let currentSymbol = string1[i];
        if (currentSymbol == "_") {
            result += char;
        } else {
            result += string1[i]
        }
    }
    let check = result === string2 ? "Matched" : "Not Matched";
    console.log(check);
}

rightPlace('Str_ng', 'O', 'Strong');

function printSum (num1, num2, num3) {
    let sum = num1 + num2 + num3;
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float'
    console.log(sum);
}

printSum(9, 100, 1.1);


function amazingNum(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`)
}

amazingNum(1233);

function amazingNum(num) {
    num = String(num);
    let sum = 0;
    let check = false; 
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let sumText = String(sum);

    for (let j = 0; j < sumText.length; j++) {
        if (sumText[j] == '9') {
            check = true; 
        } 
    }
    console.log(check ? `${num} Amazing? True` : `${num} Amazing? False`);

}
amazingNum(1233);

function gramophone(band, album, song) {
    let songDuartion = album.length * band.length * song.length / 2;
    let repetitions = Math.ceil(songDuartion / 2.5);

    console.log(`The plate was rotated ${repetitions} times.`);
}

gramophone ('Black Sabbath', 'Paranoid', 'War Pigs');

function requiredReading(bookPages, pagesPerHour, daysLimit) {
    let totalTime = bookPages / pagesPerHour;
    let hoursPerDay = totalTime / daysLimit;
    
    console.log(hoursPerDay)
}

requiredReading(212, 20, 2);

function centuriesToMinutes (century) {
    let year = 100 * century; 
    let day = Math.trunc(365.2422 * year);
    let hour = 24 * day; 
    let min = 60 * hour; 
    
    console.log(`${century} centuries = ${year} years = ${day} days = ${hour} hours = ${min} minutes`);
}

centuriesToMinutes(5);

function specialNum(n) {

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let toText = String(i);
        let check = 'False';

        for (let j = 0; j < toText.length; j++) {
            sum += Number(toText[j]);
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            check = 'True';
        }

        console.log(`${i} -> ${check}`);
    }
}

specialNum(15);


function abc (n) {
    for (let first = 0; first < n; first++) {
        let letter1 = String.fromCharCode(97+first);

        for (let second = 0; second < n; second++) {
            let letter2 = String.fromCharCode(97+second);

            for (let third = 0; third < n; third++) {
                let letter3 = String.fromCharCode(97+third);

            console.log(letter1+letter2+letter3);
            }
        }

    }

}

abc(3);
*/