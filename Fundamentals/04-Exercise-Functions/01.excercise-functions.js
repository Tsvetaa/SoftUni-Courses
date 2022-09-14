/*
function minNumberOfThree(n1, n2, n3) {
    let smallestNum = (n1, n2, n3) => Math.min(n1, n2, n3);
    console.log(smallestNum(n1, n2, n3));
}

minNumberOfThree(2, 5, 3);

function addAndSubtrackt(n1, n2, n3) {
    function add(n1, n2) {
        return n1 + n2;
    }

    let substract = (resultFromAdd, n3) => resultFromAdd - n3;
    let resultFromAdd = add(n1, n2);
    let finalResult = substract(resultFromAdd, n3);
    console.log(finalResult);
}

addAndSubtrackt(23, 6, 10);

function charInRange(char1, char2) {
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0))
    let charsInRange = []

    for (let i = startChar + 1; i < endChar; i++) {
        charsInRange.push(String.fromCharCode(i));
    }
    console.log(charsInRange.join(' '));
}

charInRange('a', 'd');
charInRange('#', ':');
charInRange('C', '#');

function oddEvenSum(num) {
    let numToString = num.toString();


    function oddSum(numToString) {
        let oddSum = 0;
        for (let i = 0; i < numToString.length; i++) {
            let currentNum = Number(numToString[i]);

            if (currentNum % 2 == 1) {
                oddSum += currentNum
            }
        }
        return oddSum;
    }
    function evenSum(numToString) {
        let evenSum = 0;
        for (let i = 0; i < numToString.length; i++) {
            let currentNum = Number(numToString[i]);

            if (currentNum % 2 == 0) {
                evenSum += currentNum
            }
        }
        return evenSum;
    }

    console.log(`Odd sum = ${oddSum(numToString)}, Even sum = ${evenSum(numToString)}`);

}

oddEvenSum(3495892137259234);


function palindromIntg (arr) {
    
    function isPali (num) {
        let reverseNum = (Number(num.toString().split('').reverse('').join('')));
        if (num == reverseNum) {
            return true;
        } else {
            return false; 
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        console.log(isPali(num));
    }

}

palindromIntg([123,323,421,121]);
*/