function limitationGame(input) {

    let word = input.shift();

    let commands = {
        Move,
        Insert,
        ChangeAll
    }

    while (input[0] != "Decode") {
        let line = input.shift().split("|");
        let name = line[0];
        let p1 = line[1];
        let p2 = line[2];

        let command = commands[name];
        command(p1, p2);
    }

    console.log(`The decrypted message is: ${word}`);

    function Move(p1) {
        let cut = word.slice(0, p1);
        word = word.substring(p1) + cut;
        //console.log(word);
        return word;
    }

    function Insert(p1, p2) {
        word = word.slice(0, p1) + p2 + word.slice(p1);
        //console.log(word);
        return word;
    }

    function ChangeAll(p1, p2) {
        let arr = word.split("");
        word = "";
        for (let element of arr) {
            if (element == p1) {
                word += p2;
            } else {
                word += element;
            }
        }
        //console.log(word);
        return word;
    }
}

limitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);

limitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);