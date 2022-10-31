function emojiDetector(input) {
    let text = input[0];

    let patternEmojy = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/g;
    let patternDigit = /\d/g;

    let digits = text.match(patternDigit);

    let treshold = 1;
    digits.map(d => treshold *= d);

    console.log(`Cool threshold: ${treshold}`);

    let emojis = []
    let validMatch

    while (validMatch = patternEmojy.exec(text)) {
        emojis.push(validMatch);
    }

    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

    for (let emojiMatch of emojis) {
        let emojiText = emojiMatch[2];
        let fullEmoji = emojiMatch[0];
        let coolness = 0;

        for (let letter of emojiText) {
            coolness += letter.charCodeAt();
        }

        if (coolness > treshold) {
            console.log(fullEmoji);
        }
    }

}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

console.log("===================");

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);