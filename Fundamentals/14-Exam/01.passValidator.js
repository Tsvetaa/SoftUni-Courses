function passValidator(input) {

    let pass = input.shift();

    let commands = {
        MakeUpper,
        MakeLower,
        Insert,
        Replace,
        Validation
    }

    while (input[0] != "Complete") {
        let tokens = input.shift().split(" ");
        let commandName = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (commandName == "Make") {
            commandName = commandName + p1;
        }

        let command = commands[commandName];
        if (command == undefined) {
            continue;
        }
        if (commandName == "MakeUpper" || commandName == "MakeLower") {
            pass = command(pass, p2);
        } else {
            pass = command(pass, p1, p2);
        }

    }

    function MakeUpper(pass, index) {
        pass = pass.replace(pass.charAt(index), pass.charAt(index).toUpperCase());
        console.log(pass);
        return pass;
    }

    function MakeLower(pass, index) {
        pass = pass.replace(pass.charAt(index), pass.charAt(index).toLowerCase());
        console.log(pass);
        return pass;
    }

    function Insert(pass, index, char) {
        let leftPart = pass.substring(0, index);
        let rightPart = pass.substring(index);
        pass = leftPart + char + rightPart
        console.log(pass)
        return pass;
    }

    function Replace(pass, char, value) {

        if (pass.includes(char)) {
            let newSymbolNumber = Number(char.charCodeAt(0)) + Number(value);
            let newSymbol = String.fromCharCode(newSymbolNumber);
            while (pass.includes(char)) {
                pass = pass.replace(char, newSymbol);
            }
            console.log(pass);
        }
        return pass;
    }

    function Validation(pass) {

        if (pass.length < 8) {
            console.log("Password must be at least 8 characters long!");
        }

        let pattern = /([^A-Za-z0-9\_]+)/g;
        let notAllowed = pattern.exec(pass);
        if (notAllowed) {
            console.log("Password must consist only of letters, digits and _!");
        }

        let patternCapital = /([A-Z]+)/g;
        let oneCapital = patternCapital.exec(pass);
        if (!oneCapital) {
            console.log("Password must consist at least one uppercase letter!");
        }

        let patternLower = /([a-z]+)/g;
        let oneLower = patternLower.exec(pass);
        if (!oneLower) {
            console.log("Password must consist at least one lowercase letter!");
        }

        let patternDigit = /([0-9]+)/g;
        let oneDigit = patternDigit.exec(pass);
        if (!oneDigit) {
            console.log("Password must consist at least one digit!");
        }

        return pass;
    }

}

passValidator(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])


console.log("===================");

passValidator(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'])

