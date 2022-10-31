function mirrorWords(input) {
    let text = input[0];
    let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;
    let match = pattern.exec(text);
    let result = [];
    let count = 0;

    while (match != null) {
        count++;
        let wordOne = match[2];
        let wordTwo = match[3];
        let wordTwoReverse = wordTwo.split("").reverse().join("");


        if (wordOne == wordTwoReverse) {
            result.push(`${wordOne} <=> ${wordTwo}`);
        }
        match = pattern.exec(text);
    }

    if (count == 0) {
        console.log("No word pairs found!");
    } else {
        console.log(count + " word pairs found!");
    }

    if (result.length == 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:")
        console.log(result.join(", "));
    }
}


mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);