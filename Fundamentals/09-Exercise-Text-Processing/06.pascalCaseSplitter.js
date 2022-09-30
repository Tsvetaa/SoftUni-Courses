function pascalCaseSplitter(input) {
    let words = [];
    let word;
    let startIndex = 0;

    for (let i = 1; i < input.length; i++) {

        if (input[i] == input[i].toUpperCase()) {
            let endIndex = i;
            word = input.substring(startIndex, endIndex);
            words.push(word);
            startIndex = endIndex;
        }
    }
    word = input.substring(startIndex, input.length + 1);
    words.push(word);

    console.log(words.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');