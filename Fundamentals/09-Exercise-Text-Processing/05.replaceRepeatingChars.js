function replaceRepeatingChars(input) {
    let unique = "";
    for (let i = 0; i < input.length; i++) {
        let currChar = input.charAt(i);
        let nextChar = input.charAt(i+1);

        if(currChar != nextChar) {
            unique += currChar;
        }
    }

    console.log(unique);

}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');