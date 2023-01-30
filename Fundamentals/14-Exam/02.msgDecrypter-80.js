function msgDecrypter(input) {
    let countInputs = input.shift();
    //let pattern = /(\$|%)(?<tag>[A-Z][a-z]{2,})(\1): (\[[0-9]+\]\|){3}$/g;
    let pattern = /^(\$|%)(?<tag>[A-Z][a-z]{2,})(\1): \[([0-9]+)\]\|\[([0-9]+)\]\|\[([0-9]+)\]\|$/g

    let validMatch

    for (let line of input) {
        validMatch = pattern.exec(line);
        if (validMatch) {
            let tag = validMatch[2];
            let decryptedMessage = String.fromCharCode(validMatch[4]) + String.fromCharCode(validMatch[5]) + String.fromCharCode(validMatch[6]);

            console.log(`${tag}: ${decryptedMessage}`);

        } else {
            console.log("Valid message not found!");
        }
    }

}


msgDecrypter(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])

console.log("=======================")
msgDecrypter(["3",
"This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
"$tAGged$: [97][97][97]|",
"$Request$: [73]|[115]|[105]|true"])