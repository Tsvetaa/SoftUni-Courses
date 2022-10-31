function secretChat(input) {
    let commands = {
        InsertSpace,
        Reverse,
        ChangeAll
    };

    let text = input.shift();
    while (input[0] != "Reveal") {
        let tokens = input.shift().split(":|:");

        let commandName = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        let command = commands[commandName];
        text = command(text, p1, p2);
    }

    console.log(`You have a new text message: ${text}`);

    function InsertSpace(text, index) {
        let leftPart = text.slice(0, index);
        let rightPart = text.slice(index);
        let result = leftPart + " " + rightPart;
        console.log(result);
        return result;
    }

    function Reverse(text, substr) {
        let index = text.indexOf(substr);
        if (index != -1) {
            let leftPart = text.slice(0, index);
            let rightPart = text.slice(index + substr.length);
            let result = leftPart + rightPart + substr.split("").reverse().join("");
            console.log(result);
            return result;

        } else {
            console.log("error");
            return text;
        }

    }

    function ChangeAll(text, substr, replaceWith) {
        let result = text.split(substr).join(replaceWith);
        console.log(result);
        return result;
    }

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