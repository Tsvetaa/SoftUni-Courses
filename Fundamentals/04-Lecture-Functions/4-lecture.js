/*
function formatGrade(grade) {
    let formated = grade.toFixed(2);
    let description;
    if (grade < 3) {
        formated = "2"
        description = "Fail"
    } else if (grade < 3.5) {
        description = "Poor"
    } else if (grade < 4.5) {
        description = "Good"
    } else if (grade < 5.5) {
        description = "Very good"
    } else {
        description = "Excellent"
    }
    console.log(`${description} (${formated})`);
}

formatGrade(2.99);

function mathPower(num, power) {
    let result = 1; 
    for (let i = 1; i <= power; i++) {
        result *= num;
    }
    console.log(result); 
}

mathPower(2,8);
mathPower(3,4);


function repeatString(string, times) {
    let result = ""
    for (let i = 1; i <= times; i++) {
        result += string;

    }
    return result;
}

console.log(repeatString("String", 2));

function orders(product, quantity) {
    let price = 0;
    switch (product) {
        case "coffee": price = 1.5
            break;
        case "water": price = 1.0
            break;
        case "coke": price = 1.4
            break;
        case "snacks": price = 2.0
            break;
    }

    let result = quantity * price;
    let formated = result.toFixed(2);
    return formated;
}

console.log(orders("water", 5));


function calculator(numOne, numTwo, operator) {
    let result = 0; 
    switch (operator) {
        case 'multiply': result = (numOne, numTwo) => numOne * numTwo;
            break;
        case 'divide': result = (numOne, numTwo) => numOne / numTwo;
            break;
        case 'add': result = (numOne, numTwo) => numOne + numTwo;
            break; 
        case 'subtract': result = (numOne, numTwo) => numOne - numTwo;
            break; 
    }

    console.log(result(numOne, numTwo));
}

calculator(5,5,'multiply');
*/

function signCheck (numOne, numTwo, numThree) {
    let countPositive = 0; 
    let countNegative = 0; 
    
    if(numOne >= 0) {
        countPositive ++; 
    } else {
        countNegative ++; 
    }
    if(numTwo >= 0) {
        countPositive ++; 
    } else {
        countNegative ++; 
    }
    if(numThree >= 0) {
        countPositive ++; 
    } else {
        countNegative ++; 
    }

    if(countPositive == 3 || countPositive == 1) {
        console.log("Positive");
    }
    if(countNegative == 3 || countNegative == 1) {
        console.log("Negative");
    }
}

signCheck(5,12,-15);
signCheck(-6,-12,14);
signCheck(-1,-2,-3);
signCheck(-5,1,1);