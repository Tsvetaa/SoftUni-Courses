function hardWords(input) {
    let letter = input[0].split(" ");
    let words = input[1];

    for (let keyWord of words) {
        let search = "_".repeat(keyWord.length);
        for (let i = 0; i < letter.length; i++) {

            if (letter[i].includes("_") && !letter[i].endsWith("_")) {
                let lastChar = letter[i].charAt(letter[i].length - 1);
                //console.log(lastChar);
                letter[i] = letter[i].substring(0, letter[i].length - 1);
                //console.log(letter[i]);

                if (search == letter[i]) {
                    letter[i] = keyWord + lastChar;
                }
                console.log(letter[i]);

            }

            //if (search == letter[i]) {
            //    letter[i] = keyWord;
           // }



        }
    }
    console.log(letter.join(" "));

}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);