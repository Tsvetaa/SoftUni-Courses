function secretChat(input) {

    let text = input.shift();
    while (input[0] != "Reveal") {
        let tokens = input.shift().split(":|:");

        let commandName = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];


        if (commandName == "InsertSpace") {
            let index = Number(p1);
            let leftPart = text.slice(0, index);
            let rightPart = text.slice(index);
            text = leftPart + " " + rightPart;
            console.log(text);

        } else if (commandName == "Reverse") {
            let index = text.indexOf(p1);
            if (index != -1) {
                let leftPart = text.slice(0, index);
                let rightPart = text.slice(index + p1.length);
                text = leftPart + rightPart + p1.split("").reverse().join("");
                console.log(text);
            } else {
                console.log("error");
            }

        } else if (commandName == "ChangeAll") {
            text = text.split(p1).join(p2);
            console.log(text);
        }
    }
    console.log(`You have a new text message: ${text}`);

}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);