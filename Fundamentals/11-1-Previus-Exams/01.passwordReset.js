function passReset(input) {
    let text = input.shift();

    let commands = {
        TakeOdd,
        Cut,
        Substitute
    }

    while (input[0] != "Done") {
        let token = input.shift().split(" ");
        let commandName = token[0];
        let p1 = token[1];
        let p2 = token[2];

        let command = commands[commandName];
        text = command(text, p1, p2);
    }

    function TakeOdd(text) {
        text = text.split("").filter((symbol, index) => index % 2 != 0).join("");
        console.log(text);
        return text
    }

    function Cut(text, index, length) {
        let substring = text.substr(index, length);
        text = text.replace(substring, "");
        console.log(text);
        return text;
    }

    function Substitute(text, substring, substitute) {

        if (text.includes(substring)) {
            while (text.includes(substring)) {
                text = text.replace(substring, substitute);
            }
            console.log(text);
        } else {
            console.log("Nothing to replace!")
        }
        return text;
    }

    if(input[0] == "Done") {
        console.log(`Your password is: ${text}`);
    }

}

passReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);

console.log("=============");

passReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);
