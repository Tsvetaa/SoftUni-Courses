function lettersChangeNumbers(input) {
    let words = input.split(" ").filter((el) => el !== "");
    let sum = 0;
    let isUpperCase = (letter) => letter.toUpperCase() == letter;
    let getAlphabetPosition = (letter) => letter.charCodeAt(0) - 96;

    words.forEach((word) => {
        let letterBefore = word[0];
        let letterAfter = word[word.length - 1];
        let number = Number(word.substring(1, word.length - 1));
        let beforePosition = getAlphabetPosition(letterBefore.toLowerCase());
        let afterPosition = getAlphabetPosition(letterAfter.toLowerCase());

        if (isUpperCase(letterBefore)) {
            number /= beforePosition;
        } else {
            number *= beforePosition;
        }

        if (isUpperCase(letterAfter)) {
            number -= afterPosition;
        } else {
            number += afterPosition;
        }

        sum += number;
    });
    console.log(sum.toFixed(2));

}

lettersChangeNumbers('A12b s17G');