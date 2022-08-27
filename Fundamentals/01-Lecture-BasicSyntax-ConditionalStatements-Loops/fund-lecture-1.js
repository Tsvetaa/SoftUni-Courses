/*
function byTwo (num) {
    let result = num * 2;
 console.log(result);   
}

byTwo(200);
byTwo(2);

function studentInfo (name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${(grade).toFixed(2)}`);
}

studentInfo('John', 15, 5.54678);
studentInfo('Steve', 16, 2.1426);
studentInfo('Marry', 12, 6.00);


function excellentGrade(grade) {
    if (grade >= 5.5) {
        console.log('Excellent')
    } else {
        console.log('Not excellent')
    }
}

excellentGrade(5.5);


function excellentGrade(grade) {
    console.log(grade >= 5.5 ? 'Excellent' : 'Not excellent');
}

excellentGrade(5.5);


function foreignLanguages (country) {
    if (country === 'England' || country === 'USA') {
        console.log('English')
    } else if (country === 'Spain' || country === 'Argentina' || country === 'Mexico') {
        console.log('Spanish')
    } else {
        console.log('unknown')
    }
}

foreignLanguages ('Germany');


function monthPrinter (num) {
    switch(num) {
        case 1: console.log('January'); break;
        case 2: console.log('February'); break;
        case 3: console.log('March'); break;
        case 4: console.log('April'); break;
        case 5: console.log('May'); break;
        case 6: console.log('June'); break;
        case 7: console.log('July'); break;
        case 8: console.log('August'); break;
        case 9: console.log('September'); break;
        case 10: console.log('October'); break;
        case 11: console.log('November'); break;
        case 12: console.log('December'); break;
        default: console.log('Error!'); break;
    }
}

monthPrinter(5);


function theatrePromotions (type, age) {
    if (age >= 0 && age <= 18) {
        if (type === 'Weekday') {
            console.log('12$')
        } else if (type === 'Weekend') {
            console.log('15$')
        } else if (type === 'Holiday') {
            console.log('5$')
        }
    }
    else if (age > 18 && age <= 64) {
        if (type === 'Weekday') {
            console.log('18$')
        } else if (type === 'Weekend') {
            console.log('20$')
        } else if (type === 'Holiday') {
            console.log('12$')
        }
    }
    else if (age > 64 && age <= 122) {
        if (type === 'Weekday') {
            console.log('12$')
        } else if (type === 'Weekend') {
            console.log('15$')
        } else if (type === 'Holiday') {
            console.log('10$')
        }
    }
    else {
        console.log('Error!')
    }
}

theatrePromotions ('Weekday', -1000);


function num1to5 () {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

num1to5();


function divisibleBy3 () {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

divisibleBy3();

function numFromNto1 (n) {
    while (n >= 1) {
        console.log (n); 
        n --; 
    }
}

numFromNto1(7);


function fromMtoN (m, n) {
    while (m >= n) {
        console.log(m); 
        m --;
    }
}

fromMtoN (11,5);


function sumOfOddNum (n) {
    let i = 1;
    let sum = 0; 
    for ( let count = 1; count <= n; count++) {
        console.log(i);
        sum = sum + i;  
        i=i+2; 
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNum (5);
*/