function cutAndReverse(input) {
    let cutHere = (input.length) / 2;
    let firstPart = input.substring(0, cutHere);
    let secondPart = input.substring(cutHere, input.length + 1);
    let reverseOne = [];
    let reverseTwo = [];

    for (let i = firstPart.length - 1; i >= 0; i--) {
        reverseOne.push(firstPart[i]);
    }
    for (let i = secondPart.length - 1; i >= 0; i--) {
        reverseTwo.push(secondPart[i]);
    }

    console.log(reverseOne.join(""));
    console.log(reverseTwo.join(""));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')


function cutAndReverseTwo(input) {
    let cutHere = (input.length) / 2;

    let firstPart = input
    .split("")
    .slice(0, cutHere)
    .reverse()
    .join(""); 
    console.log(firstPart);

    let secondPart = input
    .split("")
    .slice(cutHere, input.length)
    .reverse()
    .join(""); 
    console.log(secondPart);
   
}

cutAndReverseTwo('tluciffiDsIsihTgnizamAoSsIsihT')