function censoredWords(sentence, word) {
    while(sentence.includes(word)) {
        sentence = sentence.replace(word, "*".repeat(word.length));
    }
    console.log(sentence);
}

censoredWords('A small sentence with some small words', 'small');

function censoredWordsTwo(sentence, word) {
   let tokens = sentence.split(word);
    console.log(tokens.join("*".repeat(word.length)));
}

censoredWordsTwo('A small sentence with some small words', 'small');